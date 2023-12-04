function confirmAdmin(req,res,next) {
    console.log(req.header.cookie);
}

function confirmUserLogged(req,res,next) {

}

module.exports = {
    confirmAdmin,
    confirmUserLogged
}