import { DataTypes } from 'sequelize'

export const modeloUsuarios = (sequelize) => {

  return sequelize.define('Usuarios', {
    UsuariosID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Usuario: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Contrasena: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Matricula_rtve: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'Usuarios',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'usuarioID' },
        ]
      },
    ]
  })
}