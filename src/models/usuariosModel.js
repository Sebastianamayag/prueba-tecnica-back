module.exports=(sequelize,type)=>{
    const users=sequelize.define('users',{
        id:{
            type:type.INTEGER, 
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type:type.STRING,
            allownull:false
        },
        username:{
            type:type.STRING,
            allownull:false
        }
        ,email:{
            type:type.STRING,
            allownull:false
        },
        phone:{
            type:type.STRING,
            allownull:false
        },
        website:{
            type:type.STRING,
            allownull:false
        }
    }, { timestamps: false })
    return users;
}