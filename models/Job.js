import mongoose from 'mongoose';
const { Schema } = mongoose;

const jobSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    location: String,
    description: String,
    salary: {
        type: Number,
        min: 0,
    },
    postedAt: {
        type: Date,
        default: Date.now,
    },
    qualifications: [String],
    applicationDeadline: Date,
});

export default mongoose.model("Job", jobSchema);
