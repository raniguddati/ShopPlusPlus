import { loginUser } from "../../controller/user.js";

export default async (req, res) => {
    try {
        console.log("GET /login");
        const { email, password } = req.body;
        const { user, token } = await loginUser({ email, password });
        console.log("user", user);
        res.json({ user, token });
    } catch (error) {
        console.log("nooooooooo /login");
        res.status(403).json(error);
    }
}