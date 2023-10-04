module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define("profile_card", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    nickname: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    phone_number:{
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    email:{
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    birth:{
      type: DataTypes.DATEONLY,
      allowNull:true,
    },
    address:{
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    gender:{
      type: DataTypes.STRING(255),
      allowNull : true,

    },
    // define columns...
  },{
    tableName: "profile_card",
    paranoid: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at"
  });

  model.associate = (models) => {
    model.hasMany(models.career, {foreignKey: 'user_id', sourceKey: 'id'});
  };

  return model;
};
