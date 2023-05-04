const con = require('./connection');
const express = require('express');
const bodyParser = require("body-parser")
const ejs = require('ejs');
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.listen(8000)


app.get('/', (req, res) => {
    students = con.query("select * from students", (error, result) => {
        if (!error) res.render('register', { students: result });
        console.log(error)
    })
})

app.post('/', (req, res) => {
    console.log(typeof req.body)
    const { name, email, age, gender } = req.body;

    const sql = `insert into students(name,email,age,gender) values('${name}','${email}','${age}','${gender}')`
    con.query(sql, (error, result) => {
        if (error) throw error;
        console.log("Student Added Successfully")
        res.redirect('/')
    })
})

app.get('/search', (req, res) => {
    const name = req.query?.name
    const email = req.query?.email
    const age = req.query?.age
    const gender = req.query?.gender
    const sql = "select * from   students where name like '%" + name + "%' AND email like '%" + email + "%'";
    con.query(sql, (error, result) => {
        res.render('register', { 'students': result })
    })
})



