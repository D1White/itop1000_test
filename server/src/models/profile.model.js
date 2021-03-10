import { model, Schema } from "mongoose";

const ProfileSchema = new Schema({
    name: {
        required: true,
        type: String,
    },
    hender: {
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
});

export const ProfileModel = model("Profile", ProfileSchema);
