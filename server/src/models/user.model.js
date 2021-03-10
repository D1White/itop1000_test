import { model, Schema } from "mongoose";

const UserSchema = new Schema({
    username: {
        required: true,
        unique: true,
        type: String,
    },
    email: {
        required: true,
        unique: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
    isAdmin: {
        required: true,
        type: Boolean,
        default: false,
    },
    profiles: [
        {
            ref: "Profile",
            type: Schema.Types.ObjectId,
        },
    ],
});

export const UserModel = model("User", UserSchema);
