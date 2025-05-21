// const corsOptions = {
   
//        origin: [
//            "http://localhost:5173",
//            // "http://localhost:4173",
//            process.env.CLIENT_URL,
//        ],
//        credentials: true,
   
// };

// const CHITCHAT_TOKEN = "chitchat-token";


// export { corsOptions, CHITCHAT_TOKEN };

// config.js
export const corsOptions = {
  origin: ["https://chit-chat-frontend-sooty.vercel.app"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};





