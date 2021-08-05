
const Sequelize=require('sequelize');
//import de los modelos
const User_Model=require('../models/usuariosModel');
const Address_Model=require('../models/addressModel');
const Company_Model=require('../models/companyModel');
const Geo_Model=require('../models/geoModel');
//configuracion de la url de la bd
const sequelize = new Sequelize('bthjfpyzlqydbsyf8auc', 'ufxcucgalo6k3kjr', 'degpTjWVXq2sXkMjeDMo', {
    host: 'bthjfpyzlqydbsyf8auc-mysql.services.clever-cloud.com',
    dialect: 'mysql'
});
//creando la tablas tablas
const Company=Company_Model(sequelize,Sequelize);
const Geo=Geo_Model(sequelize,Sequelize);
const Address=Address_Model(sequelize,Sequelize);
const Usuario=User_Model(sequelize,Sequelize);
//User-Service FK
Address.hasMany(Usuario)
Usuario.belongsTo(Address);

Geo.hasMany(Address)
Address.belongsTo(Geo);

Company.hasMany(Usuario)
Usuario.belongsTo(Company);
//sincronizando squelize
sequelize.sync()
    .then(()=>{
        console.log('Tablas creadas');
    })
module.exports={
    Usuario,
    Address,
    Company,
    Geo
}

