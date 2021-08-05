module.exports=(sequelize,type)=>{
    const geo=sequelize.define('geo',{
        id:{
            type:type.INTEGER, 
            autoIncrement: true,
            primaryKey: true
        },
        lat:{
            type:type.STRING,
            allownull:false
        },
        long:{
            type:type.STRING,
            allownull:false
        }
    }, { timestamps: false })
    return geo;
}