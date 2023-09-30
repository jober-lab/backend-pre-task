module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define("career", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        company_name:{
            type: DataTypes.STRING(255),
            allowNull : true
        },
        job : {
            type: DataTypes.STRING(255),
            allowNull : true
        },
        join_date : {
            type: DataTypes.DATEONLY,
            allowNull:true
        },
        quit_date : {
            type: DataTypes.DATEONLY,
            allowNull:true
        }
        // define columns...
    },{
        tableName: "career",
        paranoid: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at"
    });

    model.associate = (models) => {
        model.belongsTo(models.profile_card, {foreignKey: 'user_id', sourceKey: 'id'});
    };

    return model;
};
