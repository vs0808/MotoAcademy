const express = require('express')
const fileController = require('../controllers/fileControler')
const multer = require('multer');
const upload = multer(); 

const router = express.Router();

router.post("/upload", upload.single('image'),fileController.uploadImage)
router.get("/:id", fileController.getImage)
router.put("/:id", fileController.uploadImage)
router.delete("/id", fileController.deleteImage)

module.exports = router;


