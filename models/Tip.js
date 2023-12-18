import mongoose from 'mongoose';
const { Schema } = mongoose;

const tipSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['Job Searching', 'Job Interview', 'CV'],
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model("Tip", tipSchema);
