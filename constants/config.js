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

export const corsOptions = {
  origin: [
    "https://chit-chat-frontend-dtf5.vercel.app",
  ],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
  methods: ["GET", "POST", "PUT", "DELETE"],
};

export const CHITCHAT_TOKEN = "chitchat-token";


