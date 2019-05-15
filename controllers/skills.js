var Skill = require("../models/skill");

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
}
// the reason why some of these are verbose key value pairs is that new and delete are reserved keywords

function index(req, res) {
    res.render("skills/index", {
        skills: Skill.getAll(),
        time: req.time
    });
};

function show(req, res){
    res.render("skills/show", {
        skill: Skill.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1
        // we add a 1 to the parseInt so that we convert to a ONE-based system
    });
};

function newSkill(req, res){
    res.render("skills/new");
}

function create(req, res){
    // if we look at the model (data), we see that the objects in our array have two properties:
    // "todo" and "done". calling on req.body.done allows access (set/get) that particular property
    // recall that .body is a middleware function that mounted by express-generator by default; .body
    // parses data sent in the BODY of the request and populates a req.body containing said data
    req.body.learned = false;
    Skill.create(req.body);
    res.redirect("/skills");
    // remember that the job of the controller is NOT to push data into an array (or database)
    // the controller is simply there to handle requests and responses
}

function deleteSkill(req, res){
    Skill.deleteOne(req.params.id);
    res.redirect("/skills");
    // REDIRECT is NOT a view; it is a route path
}

function edit(req, res){
    var skill = Skill.getOne(req.params.id);
    res.render("skills/edit", {
        // on the other hand, RENDER, passes in a relative path for a VIEW (ejs file)
        skill,
        skillId: req.params.id
    });
};

function update(req, res){
    req.body.learned = !!req.body.learned;
    Skill.update(req.param.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
}
