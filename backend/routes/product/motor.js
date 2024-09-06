import mongoose from 'mongoose';

const motorsSchema = new mongoose.Schema({
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
const Motors = mongoose.model('motors', motorsSchema);

export default async (req, res) => {
    try {
        console.log('motor');
        const motors = await Motors.find({}).exec();
        res.send(motors);
        // res.redirect('/motors');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');

    }
}