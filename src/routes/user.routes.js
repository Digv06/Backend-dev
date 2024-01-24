import { Router } from "express";
import {
  registerUser,
  userLogin,
  userLogout,
  refreshingRefreshToken,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),

  registerUser
);

router.route("/login").post(userLogin);

// secured routes we are using the verify middleware to check the existance of user and then next to userLogout
router.route("/logout").post(verifyJWT, userLogout);
router.route("/refresh-token").post(refreshingRefreshToken);

export default router;
