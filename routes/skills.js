var express = require('express');
var router = express.Router();
var skillsCtrl = require("../controllers/skills");

/* GET /skills. */
router.get("/", skillsCtrl.index);
router.get("/new", skillsCtrl.new);
router.get("/:id", skillsCtrl.show);
router.get("/:id/edit", skillsCtrl.edit);
router.post("/", skillsCtrl.create);
router.delete("/:id", skillsCtrl.delete);
router.put("/:id", skillsCtrl.update);
// "/:id" must be at the end because :id will accept ANYTHING
// so if "/new" were defined AFTER ":id", it would execute the callback 
// for "/:id"

module.exports = router;
