module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define("profile_card", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    phone_number:{
      type: DataTypes.STRING(255),
      allowNull: false,
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
      allowNull : false,

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
