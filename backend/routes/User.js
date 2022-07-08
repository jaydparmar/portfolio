import express from "express";
import {login, logout, getUser, myProfile, contact, updateUser, addTimeline, addProject, deleteTimeline, deleteProject} from "../controller/User.js"
import { isAuth } from "../middlewares/auth.js";

export const userRouter = express.Router();

userRouter.route("/login").post(login);

userRouter.route("/logout").get(logout);
userRouter.route("/user").get(getUser);
userRouter.route("/me").get(isAuth, myProfile);

userRouter.route("/admin/update").put(isAuth, updateUser);

userRouter.route("/admin/timeline/add").post(isAuth, addTimeline);
userRouter.route("/admin/project/add").post(isAuth, addProject);

userRouter.route("/admin/timeline/:id").delete(isAuth, deleteTimeline);
userRouter.route("/admin/project/:id").delete(isAuth, deleteProject);

userRouter.route("/contact").post(contact);
