//  Modelo de ejemplo

module.exports = (sequelize, type) => {
    return sequelize.define('table', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        textString: type.STRING,
        number: type.INTEGER
    })
}