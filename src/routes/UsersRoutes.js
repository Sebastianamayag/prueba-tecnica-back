const express = require("express");
const { Usuario, Address, Geo, Company } = require("../bd/dbconecction");
const app = express();

app.get("/usuarios", async (req, res) => {
  Usuario.findAll({ include: [
    {model: Address, attributes: ['street','suite','city','zipcode'], include : [{model: Geo,attributes:['lat','long']}]},{model:Company, attributes:['name','catchPhrase','bs']}
    ],attributes:['id','name','username','email','phone','website']})
  .then((usuario) => {
    res.status(200).json({ usuario });
  });
});

module.exports = app;
