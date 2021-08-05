module.exports=(sequelize,type)=>{
    const address=sequelize.define('address',{
        id:{
            type:type.INTEGER, 
            autoIncrement: true,
            primaryKey: true
        },
        street:{
            type:type.STRING,
            allownull:false
        },
        suite:{
            type:type.STRING,
            allownull:false
        }
        ,city:{
            type:type.STRING,
            allownull:false
        },
        zipcode:{
            type:type.STRING,
            allownull:false
        }
        
    }, { timestamps: false })
    return address;
}