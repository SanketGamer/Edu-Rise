import {Webhook} from "svix"
import User from "../models/user.js"
import Stripe from "stripe"
import Purchase from "../models/purchase.js"
import Course from "../models/course.js"
import Educator from "../models/educator.js"


//api controller function for manage clerk user with database
export const clerkWebhooks = async (req, res) => {
  try {
    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    await wh.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body;

    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          email: data.email_addresses[0].email_address,
          name: `${data.first_name} ${data.last_name}`,
          imageUrl: data.image_url,
        };

        await User.create(userData);
        return res.json({});
      }

      case "user.updated": {
        const updates = {
          email: data.email_addresses[0].email_address,
          name: `${data.first_name} ${data.last_name}`,
          imageUrl: data.image_url,
        };

        await User.findByIdAndUpdate(data.id, updates);
        return res.json({});
      }

      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        return res.json({});
      }
    }

    res.json({});
  } catch (error) {
    console.error("Clerk webhook error:", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};




const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function stripeWebHooks(req, res) {
  try {
    const sig = req.headers["stripe-signature"];

    const event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    // 1️⃣ This is the correct event
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      const purchaseId = session.metadata.purchaseId;
      console.log("Purchase ID from session:", purchaseId);

      const purchaseData = await Purchase.findById(purchaseId);
      const userData = await User.findById(purchaseData.userId);
      const courseData = await Course.findById(purchaseData.courseId);

      // Save only userId
      courseData.enrolledStudents.push(userData._id);
      await courseData.save();

      userData.enrolledCourses.push(courseData._id);
      await userData.save();

      purchaseData.status = "completed";
      await purchaseData.save();

      console.log("Purchase completed & student added.");
    }

    res.json({ received: true });

  } catch (error) {
    console.error("Webhook Error:", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
}





