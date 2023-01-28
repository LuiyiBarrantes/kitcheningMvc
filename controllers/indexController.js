const courses=require('../data/courses.json')

module.exports = {
    home : (req, res) => {
        /* aca va la lógica */
        res.render("home",{
            title: "Kitchening | HOME",
            courses
        });
    }
}