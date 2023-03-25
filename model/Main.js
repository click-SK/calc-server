import mongoose from "mongoose";

const MainSchema = new mongoose.Schema({
    emission: {
        type: Number
    },
    rate: {
        type: Number
    },
    air: {
        type: Number
    },
    balans: {
        type: Number
    },
},{timestamps: true,})

export default mongoose.model('Main', MainSchema)