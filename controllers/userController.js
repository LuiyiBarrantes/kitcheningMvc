module.exports = {
    register : (req,res) => {
        return res.render('users/register',{
            title : "Regstro de usuario"
        })
    },
    login : (req,res) => {
        return res.render('users/login',{
            title:"inicio de sesión"
        })
    },
    profile : (req,res) => {
        return res.render('users/profile', {
            title:"Perfil de usuario"
        })
    }
}