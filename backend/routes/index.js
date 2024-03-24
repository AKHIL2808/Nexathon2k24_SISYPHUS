import express  from "express";
import userRouter from "../routes/user";
import teacherRouter from "./employee";
import adminRouter from "../routes/admin";

const router = express.Router();

router.use("/user/",userRouter);
router.use("/admin",adminRouter);
router.use("/teachers",teacherRouter);

export default router;

