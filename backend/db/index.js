import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        const connection = process.env.DB_STRING;
        mongoose.connect
            (`${connection}`,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                });
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};
export default connectToDB