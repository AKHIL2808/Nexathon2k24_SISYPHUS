
import { Router } from "express";
import { User } from "../db";

const router = Router();

router.post("/signup", async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    //to check if the user already exists
    const userExists = await User.findOne({ email: email })

    if (userExists) {
        res.status(411).json({
            message: "User already exists",
        })
    } else {
        const user = await User.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        })

        const userId = user._id;

        const token = jwt.sign({ userId }, jwtSecret);

        res.json({
            message: "User Created Successfully",
            token: token,
        })
    }
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const userExists = await User.findOne({
        email: email,
        password: password,
    })

    if (userExists) {
        const userId = userExists._id;

        const token = jwt.sign({ userId }, jwtSecret);

        res.json({
            message: 'Login Successfully',
        })
    } else {
        res.json({
            message: "Wrong Credentials",
        })
    }
})

router.get("/myGreviances", (req, res) => {
    res.json({
        message: "hi from my greviances",
    })
})

export default router;