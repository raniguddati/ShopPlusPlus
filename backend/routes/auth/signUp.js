import { signUpUser } from "../../controller/user.js";
export default async (req, res) => {
    try {
        const { name, email, password, address, phoneNumber } = req.body;
        const { user, token } = await signUpUser({ name, email, password, address, phoneNumber });
        res.json({ user, token });
    } catch (error) {
        res.status(403).json(error);
    }
};
