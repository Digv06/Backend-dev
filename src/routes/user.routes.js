import { Router } from "express";
import {
  registerUser,
  userLogin,
  userLogout,
  refreshingRefreshToken,
  changeCurrentPassword,
  getCurrentUser,
  updateUser,
  updateAvatar,
  updateCoverImage,
  getUserProfile,
  getUserWatchistory,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 3,
    },
    {
      name: "coverImage",
      maxCount: 3,
    },
  ]),

  registerUser
);

router.route("/login").post(userLogin);

// secured routes we are using the verify middleware to check the existance of user and then next to userLogout
router.route("/logout").post(verifyJWT, userLogout);
router.route("/refresh-token").post(refreshingRefreshToken);

router.route("/change-password").post(verifyJWT, changeCurrentPassword);
router.route("/current-user").get(verifyJWT, getCurrentUser);
router.route("/update-user").patch(verifyJWT, updateUser);
router.route("/avatar").patch(verifyJWT, upload.single("avatar"), updateAvatar);
router
  .route("/coverImage")
  .patch(verifyJWT, upload.single("coverImage"), updateCoverImage);
router.route("/c/:username").get(verifyJWT, getUserProfile);
router.route("/watch-History").get(verifyJWT, getUserWatchistory);

export default router;
