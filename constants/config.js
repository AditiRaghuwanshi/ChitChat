// const corsOptions = {
   
//        origin: [
//         "https://chit-chat-frontend-sooty.vercel.app",
//         //    "http://localhost:5173",
//            // "http://localhost:4173",
//         //    process.env.CLIENT_URL,
//        ],
//        credentials: true,
//         allowedHeaders: ["Content-Type", "Authorization"],
   
// };

// const CHITCHAT_TOKEN = "chitchat-token";


// export { corsOptions, CHITCHAT_TOKEN };


const allowedOrigins = [
  process.env.CLIENT_URL || "https://chit-chat-frontend-sooty.vercel.app",
  "http://localhost:5173", // uncomment for local dev if needed
];

const corsOptions = {
  origin: function(origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};

const CHITCHAT_TOKEN = "chitchat-token";

export { corsOptions, CHITCHAT_TOKEN };





