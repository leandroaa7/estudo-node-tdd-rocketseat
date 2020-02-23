module.exports = (sequelize, DataTypes) => {
    // sequelize com nome do model
    const User = sequelize.define("User", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING,
    });



    return User;
};