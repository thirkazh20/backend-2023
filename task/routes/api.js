// import Student Controller
const StudentController = require("../controllers/StudentController");

// import express
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello Express");
});

router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);
// Menambahkan route untuk get detail resource
router.get("/students/:id", StudentController.show);

// export routing
module.exports = router;