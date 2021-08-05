module.exports=(sequelize,type)=>{
    const company=sequelize.define('company',{
        id:{
            type:type.INTEGER, 
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type:type.STRING,
            allownull:false
        },
        catchPhrase:{
            type:type.STRING,
            allownull:false
        }
        ,bs:{
            type:type.STRING,
            allownull:false
        }
        ,
    }, { timestamps: false })
    return company;
}