import { model, Schema } from "mongoose";

const ProfileSchema = new Schema({
    name: {
        required: true,
        type: String,
    },
    gender: {
        required: true,
        type: String,
        enum: ["male", "female"],
    },
    birthdate: {
        required: true,
        type: Date,
    },
    city: {
        required: true,
        type: String,
    },
    user_id: {
        required: true,
        ref: 'User',
        type: Schema.Types.ObjectId,
    }
});

export const ProfileModel = model("Profile", ProfileSchema);
