const { Router } = require("express");
const authController = require("../controllers/AuthController");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./controllers/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });
const router = Router();

router.post("/signup", upload.single("image"), authController.signup_post);
router.post("/login", authController.login_post);
router.get("/tinder/card", authController.get_card);

module.exports = router;
