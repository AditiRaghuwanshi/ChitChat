import mongoose, {model, Schema, Types} from "mongoose";
import { hash } from "bcrypt";

const schema = new Schema ({

    namee: {
        type: String,
        required: true,
    },
    
    bio: {
        type: String,
        required: true,
    },

    username: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
        select: false,
    },
    avatar: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },

    friends: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
},
 {
    timestamps: true,
});

schema.pre("save", async function(next) {
    if(!this.isModified("password")) return next();
    
    this.password = await hash(this.password, 10);
   
})


export const User = mongoose.models.User || model("User", schema);





