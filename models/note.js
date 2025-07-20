"use strict";
import Model from "sequelize";
const note = (sequelize, DataTypes) => {
  class note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  note.belongsTo(models.user, {
    foreignKey: "user_id", // The foreign key in the note table
    targetKey: "id", // The primary key in the user table
    onDelete: "CASCADE", // Optionally, you can add cascade delete here
  });

  note.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "note",
      tableName: "note",
      createdAt: "created_at",
      updatedAt: "updated_at",
      timestamps: true,
    }
  );
  return note;
};

export default note;
