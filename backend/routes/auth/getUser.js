import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
    id: String,
    name: String,
    model: String,
    year: Number,
    price: Number,
    imageSrc: String,
    imageAlt: String,
    description: String,
    star: Number
});

const users = mongoose.model('accessories', userSchema);

export default async (req, res) => {
    try {
        console.log('user');
        const User = await users.find({}).exec();
        res.send(User);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
}



