const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database:"bditens",
    port:3306,
    
})
/*teste de banco
app.get("/", (req,res) => {
    let SQL = "INSERT INTO listaitens ( itens ) VALUES ('rosa')";
    db.query(SQL, (err, result) =>{
        console.log(err);
    })
})*/


//delete
app.delete("/item/:id", (req, res) =>{
    const {id} = req.params;
    console.log("Informação: ", id)
    let SQL = " DELETE FROM listaitens WHERE (`id` = ?)";

    db.query(SQL, id, (err, result) => {
        console.log(err);
    })
})

//read
app.get("/itens", (req, res) => {
    let SQL = "SELECT * from listaitens";
    db.query(SQL, (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    })
})

//create
app.post("/item", (req,res) =>{
    const { item } = req.body;
    let SQL = " INSERT INTO listaitens (itens) VALUES (?)";
    db.query(SQL, item, (err, result) =>{
        console.log(err);
    })
});

app.listen(3001, () => {
    console.log("rodando servidor");

})