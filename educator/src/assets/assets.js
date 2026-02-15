import logo from './logo.jpg'
import logo_dark from './logo_dark.svg'
import educator_logo from "./Educatorlogo.svg"
import search_icon from './search_icon.svg'
import cross_icon from './cross_icon.svg'
import upload_area from './upload_area.svg'
import sketch from './sktech.svg'
import microsoft_logo from './microsoft_logo.svg'
import walmart_logo from './walmart_logo.svg'
import accenture_logo from './accenture_logo.svg'
import adobe_logo from './adobe_logo.svg'
import paypal_logo from './paypal_logo.svg'
import course_1_thumbnail from './course_1.png'
import course_2_thumbnail from './course_2.png'
import course_3_thumbnail from './course_3.png'
import course_4_thumbnail from './course_4.png'
import star from './rating_star.svg'
import star_blank from './star_dull_icon.svg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import arrow_icon from './arrow_icon.svg'
import down_arrow_icon from './down_arrow_icon.svg'
import time_left_clock_icon from './time_left_clock_icon.svg'
import time_clock_icon from './time_clock_icon.svg'
import user_icon from './user_icon.svg'
import home_icon from './home_icon.svg'
import add_icon from './add_icon.svg'
import my_course_icon from './my_course_icon.svg'
import person_tick_icon from './person_tick_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import file_upload_icon from './file_upload_icon.svg'
import appointments_icon from './appointments_icon.svg'
import earning_icon from './earning_icon.svg'
import dropdown_icon from './dropdown_icon.svg'
import patients_icon from './patients_icon.svg'
import play_icon from './play_icon.svg'
import blue_tick_icon from './blue_tick_icon.svg'
import course_4 from './course_4.png'
import profile_img from './profile_img.png'
import profile_img2 from './profile_img2.png'
import profile_img3 from './profile_img3.png'
import lesson_icon from './lesson_icon.svg'
import frontend_dev from "./sanniv.jpg"
import backend_dev from "./sanketBackend.jpg"
import project_logo from "./ProjectLogo.jpg"

export const assets = {
    frontend_dev,
    project_logo,
    backend_dev,
    logo,
    educator_logo,
    search_icon,
    sketch,
    microsoft_logo,
    walmart_logo,
    accenture_logo,
    adobe_logo,
    paypal_logo,
    course_1_thumbnail,
    course_2_thumbnail,
    course_3_thumbnail,
    course_4_thumbnail,
    star,
    star_blank,
    profile_img_1,
    profile_img_2,
    profile_img_3,
    arrow_icon,
    dropdown_icon,
    cross_icon,
    upload_area,
    logo_dark,
    down_arrow_icon,
    time_left_clock_icon,
    time_clock_icon,
    user_icon,
    home_icon,
    add_icon,
    my_course_icon,
    person_tick_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    course_4,
    file_upload_icon,
    appointments_icon,
    earning_icon,
    patients_icon,
    profile_img,
    profile_img2,
    profile_img3,
    play_icon,
    blue_tick_icon,
    lesson_icon
}

export const dummyEducatorData = {
    "_id": "675ac1512100b91a6d9b8b24",
    "name": "GreatStack",
    "email": "user.greatstack@gmail.com",
    "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yclFkaDBOMmFqWnBoTTRBOXZUanZxVlo0aXYifQ",
    "createdAt": "2024-12-12T10:56:17.930Z",
    "updatedAt": "2024-12-12T10:56:17.930Z",
    "__v": 0
}

export const dummyTestimonial = [
    {
        name: 'Anupam',
        role: 'SDE intern @cvent',
        image: assets.profile_img_1,
        rating: 5,
        feedback: 'Solid Start from Sunday',
        mediaText:"I absolutely loved this course! It helped me level up my skills and gain confidence. The instructor was amazing, and the content was very practical and easy to follow. Highly recommend to everyone"
    },
    {
        name: 'Sanniv Das',
        role: 'SDE intern @Paytm',
        image: assets.profile_img_2,
        rating: 4,
        feedback: 'Excited to kickoff my new journey-',
        mediaText: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
    {
        name: 'James Washington',
        role: 'SWE 2 @ Google',
        image: assets.profile_img_3,
        rating: 4.5,
        feedback: 'Things That happend and change my life thankyou Edurise',
        mediaText:  "This course completely exceeded my expectations! The lessons were structured perfectly, making complex topics easy to understand. I loved the hands-on exercises that allowed me to apply what I learned immediately. The instructor’s guidance was invaluable, and the community support made the whole experience even better. I feel empowered, confident, and ready to tackle new challenges. Truly an amazing learning journey that I would recommend to anyone eager to grow and succeed!"
    },
        {
        name: 'James Washington',
        role: 'SWE 2 @ Google',
        image: assets.profile_img_3,
        rating: 4.5,
        feedback: 'Things That happend and change my life thankyou Edurise',
        mediaText:  "This course completely exceeded my expectations! The lessons were structured perfectly, making complex topics easy to understand. I loved the hands-on exercises that allowed me to apply what I learned immediately. The instructor’s guidance was invaluable, and the community support made the whole experience even better. I feel empowered, confident, and ready to tackle new challenges. Truly an amazing learning journey that I would recommend to anyone eager to grow and succeed!"
    },
        {
        name: 'James Washington',
        role: 'SWE 2 @ Google',
        image: assets.profile_img_3,
        rating: 4.5,
        feedback: 'Things That happend and change my life thankyou Edurise',
        mediaText:  "This course completely exceeded my expectations! The lessons were structured perfectly, making complex topics easy to understand. I loved the hands-on exercises that allowed me to apply what I learned immediately. The instructor’s guidance was invaluable, and the community support made the whole experience even better. I feel empowered, confident, and ready to tackle new challenges. Truly an amazing learning journey that I would recommend to anyone eager to grow and succeed!"
    },
    
];

export const dummyDashboardData = {
    "totalEarnings": 707.38,
    "enrolledStudentsData": [
        {
            "courseTitle": "Introduction to JavaScript",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        },
        {
            "courseTitle": "Advanced Python Programming",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        },
        {
            "courseTitle": "Web Development Bootcamp",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        },
        {
            "courseTitle": "Data Science with Python",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        },
        {
            "courseTitle": "Cybersecurity Basics",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        }
    ],
    "totalCourses": 8
}

export const dummyStudentEnrolled = [
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "GreatStack",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Introduction to JavaScript",
        "purchaseDate": "2024-12-20T08:39:55.509Z"
    },
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "GreatStack",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Introduction to JavaScript",
        "purchaseDate": "2024-12-20T08:59:49.964Z"
    },
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "GreatStack",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Advanced Python Programming",
        "purchaseDate": "2024-12-20T11:03:42.931Z"
    },
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "GreatStack",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Web Development Bootcamp",
        "purchaseDate": "2024-12-20T11:04:48.798Z"
    }
]

export const dummyCoursesData = [
  {
    "_id": "course101",
    "courseTitle": "DSA Mastery with LeetCode + 24/7 Grind + 1:1 mentroships",
    "courseDescription": "<h2>Master DSA through LeetCode</h2><p>This course will help you strengthen your Data Structures and Algorithms skills with handpicked LeetCode problems.</p><ul><li>Master array, string, and tree problems</li><li>Practice real-world coding interview questions</li><li>Sharpen your problem-solving skills</li></ul>",
    "coursePrice": 999.80,
    "isPublished": true,
    "discount": 20,
      "Syllabus": {
      "Week 1": "Time Complexity, Recursion, and Arrays",
      "Week 2": "Linked Lists, Stacks, and Queues",
      "Week 3": "Trees and Binary Search Trees",
      "Week 4": "Graphs, DFS/BFS, and Topological Sort",
      "Week 5": "Dynamic Programming Basics",
      "Week 6": "Advanced DP Problems and Optimization",
      "Week 7": "Bit Manipulation and Greedy Algorithms",
      "Week 8": "System Design Basics + Final Mock Interviews"
    },
    "courseContent": [
      {
        "chapterId": "arrays-chapter",
        "chapterTitle": "Arrays",
        "chapterContent": [
          {
            "lectureId": "lec1",
            "lectureTitle": "Two Sum",
            "practiceUrl": "https://leetcode.com/problems/two-sum/",
            "lectureUrl":"https://youtu.be/TCaBnVIllrQ?si=iGFZ95P7xr4gzB1W",
            "Dificulty":"Medium",
            "isPreviewFree": true,
            "lectureOrder": 1
          },
          {
            "lectureId": "lec2",
            "lectureTitle": "Best Time to Buy and Sell Stock",
            "lectureUrl": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
               "Dificulty":"Easy",
            "isPreviewFree": true,

            "lectureOrder": 2
          },
          {
            "lectureId": "lec3",
            "lectureTitle": "Contains Duplicate",
            "lectureUrl": "https://leetcode.com/problems/contains-duplicate/",
            "Dificulty":"Medium",
            "isPreviewFree": true,
            "lectureOrder": 3
          }
        ]
      },
      {
        "chapterId": "stack-chapter",
        "chapterTitle": "Stack & Monotonic Stack",
        "chapterContent": [
          {
            "lectureId": "lec4",
            "lectureTitle": "Valid Parentheses",
            "lectureUrl": "https://leetcode.com/problems/valid-parentheses/",
            "isPreviewFree": true,
            "lectureOrder": 1
          },
          {
            "lectureId": "lec5",
            "lectureTitle": "Daily Temperatures",
            "lectureUrl": "https://leetcode.com/problems/daily-temperatures/",
            "isPreviewFree": true,
            "lectureOrder": 2
          }
        ]
      },
      {
        "chapterId": "binary-search-chapter",
        "chapterTitle": "Binary Search",
        "chapterContent": [
          {
            "lectureId": "lec6",
            "lectureTitle": "Binary Search",
            "lectureUrl": "https://leetcode.com/problems/binary-search/",
            "isPreviewFree": true,
            "lectureOrder": 1
          },
          {
            "lectureId": "lec7",
            "lectureTitle": "Search in Rotated Sorted Array",
            "lectureUrl": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
            "isPreviewFree": true,
            "lectureOrder": 2
          }
        ]
      }
    ],
     "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],

         "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2024-12-31T05:31:27.290Z",
        "courseThumbnail":"https://i.postimg.cc/ryd7JWkQ/Data-structure.png"
  },
  {
  "_id": "course102",
  "courseTitle": "Java Programming Essentials",
  "courseDescription": "<h2>Master Java from Scratch</h2><p>This course covers the fundamentals of Java programming, including syntax, OOP concepts, and exception handling.</p><ul><li>Understand core Java syntax</li><li>Explore object-oriented principles</li><li>Work with collections, loops, and exceptions</li></ul>",
  "coursePrice": 888.88,
  "isPublished": true,
  "discount": 20,
  "courseContent": [
    {
      "chapterId": "java-basics",
      "chapterTitle": "Java Basics",
      "chapterContent": [
        {
          "lectureId": "java1",
          "lectureTitle": "Hello World in Java",
          "lectureUrl": "https://www.geeksforgeeks.org/java-program-to-print-an-integer-entered-by-the-user/",
          "isPreviewFree": true,
          "lectureOrder": 1
        },
        {
          "lectureId": "java2",
          "lectureTitle": "Data Types and Variables",
          "lectureUrl": "https://www.geeksforgeeks.org/data-types-in-java/",
          "isPreviewFree": true,
          "lectureOrder": 2
        }
      ]
    },
    {
      "chapterId": "oop-java",
      "chapterTitle": "OOP in Java",
      "chapterContent": [
        {
          "lectureId": "java3",
          "lectureTitle": "Classes and Objects",
          "lectureUrl": "https://www.geeksforgeeks.org/classes-objects-java/",
          "isPreviewFree": true,
          "lectureOrder": 1
        },
        {
          "lectureId": "java4",
          "lectureTitle": "Inheritance in Java",
          "lectureUrl": "https://www.geeksforgeeks.org/inheritance-in-java/",
          "isPreviewFree": true,
          "lectureOrder": 2
        }
      ]
    }
  ],
   "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],

         "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2024-12-31T05:31:27.290Z",
  "courseThumbnail": "https://i.postimg.cc/c1DDDr3W/Java-Language.png"
},
{
  "_id": "course103",
  "courseTitle": "Web Development Fundamentals",
  "courseDescription": "<h2>Start Building Websites Today</h2><p>This course introduces you to HTML, CSS, and JavaScript — the core building blocks of the web.</p><ul><li>Create responsive layouts with HTML/CSS</li><li>Enhance interactivity with JavaScript</li><li>Build and deploy real-world websites</li></ul>",
  "coursePrice": 0,
  "isPublished": true,
  "discount": 0,
  "courseContent": [
    {
      "chapterId": "html-css",
      "chapterTitle": "HTML & CSS Basics",
      "chapterContent": [
        {
          "lectureId": "web1",
          "lectureTitle": "Intro to HTML",
          "lectureUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML",
          "isPreviewFree": true,
          "lectureOrder": 1
        },
        {
          "lectureId": "web2",
          "lectureTitle": "Intro to CSS",
          "lectureUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS",
          "isPreviewFree": true,
          "lectureOrder": 2
        }
      ]
    },
    {
      "chapterId": "js-basics",
      "chapterTitle": "JavaScript Basics",
      "chapterContent": [
        {
          "lectureId": "web3",
          "lectureTitle": "JavaScript Syntax",
          "lectureUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types",
          "isPreviewFree": true,
          "lectureOrder": 1
        },
        {
          "lectureId": "web4",
          "lectureTitle": "DOM Manipulation",
          "lectureUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
          "isPreviewFree": true,
          "lectureOrder": 2
        }
      ]
    }
  ],
   "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],

         "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2024-12-31T05:31:27.290Z",
  "courseThumbnail": "https://i.postimg.cc/RVdn1HJ1/Chat-GPT-Image-Aug-2-2025-08-12-38-AM.png"
},
{
  "_id": "course104",
  "courseTitle": "Database Fundamentals",
  "courseDescription": "<h2>Learn Core Database Concepts</h2><p>This course covers relational databases, SQL queries, and normalization concepts essential for backend development and data management.</p><ul><li>Understand database design and ER modeling</li><li>Master SQL queries: SELECT, JOIN, GROUP BY</li><li>Learn normalization and indexing</li></ul>",
  "coursePrice": 0,
  "isPublished": true,
  "discount": 0,
  "courseContent": [
    {
      "chapterId": "intro-db",
      "chapterTitle": "Introduction to Databases",
      "chapterContent": [
        {
          "lectureId": "lec1",
          "lectureTitle": "What is a Database?",
          "lectureUrl": "https://www.geeksforgeeks.org/what-is-database/",
          "isPreviewFree": true,
          "lectureOrder": 1
        },
        {
          "lectureId": "lec2",
          "lectureTitle": "Relational vs Non-relational DBs",
          "lectureUrl": "https://www.mongodb.com/nosql-explained",
          "isPreviewFree": true,
          "lectureOrder": 2
        }
      ]
    },
    {
      "chapterId": "sql-basics",
      "chapterTitle": "SQL Basics",
      "chapterContent": [
        {
          "lectureId": "lec3",
          "lectureTitle": "SELECT, INSERT, UPDATE, DELETE",
          "lectureUrl": "https://www.w3schools.com/sql/sql_syntax.asp",
          "isPreviewFree": true,
          "lectureOrder": 1
        },
        {
          "lectureId": "lec4",
          "lectureTitle": "JOINs in SQL",
          "lectureUrl": "https://www.sqlshack.com/sql-join-types/",
          "isPreviewFree": true,
          "lectureOrder": 2
        }
      ]
    },
    {
      "chapterId": "advanced-db",
      "chapterTitle": "Normalization & Indexing",
      "chapterContent": [
        {
          "lectureId": "lec5",
          "lectureTitle": "Normalization: 1NF to 3NF",
          "lectureUrl": "https://www.studytonight.com/dbms/database-normalization.php",
          "isPreviewFree": true,
          "lectureOrder": 1
        },
        {
          "lectureId": "lec6",
          "lectureTitle": "Indexing for Performance",
          "lectureUrl": "https://use-the-index-luke.com/",
          "isPreviewFree": true,
          "lectureOrder": 2
        }
      ]
    }
  ],
   "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],

         "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2024-12-31T05:31:27.290Z",
  "courseThumbnail": "https://i.postimg.cc/mgTyB4Cj/Database.png"
}

];
