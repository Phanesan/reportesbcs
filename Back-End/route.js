// Path
module.exports = function(app) {

    // Home
    app.get('/', (req, res) => {
        res.send("API Reportes BCS")
    });
    
}