const mysql= require("mysql");

const con = mysql.createConnection({
    host:"db4free.net",
    user:"saikrishna_kasa1",
    password:"1211292081",
    database:"kasadb_143",
    port:3306
});

con.connect((error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("DB Connected...")
    }

    // con.query("select * from students",(error,res)=>{
    //     if(error) throw new Error(error);
    //     console.log(res);
    // })
});

module.exports=con;

/*

con.query(`CREATE TABLE IF NOT EXISTS students (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    age INT NOT NULL,
    gender ENUM('male', 'female', 'non-binary') NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    address VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
  );`,(error,res)=>{
    if(error) throw new Error(error);
    console.log(res);
  })

con.query(
    `INSERT INTO students (name, age, gender, email) 
    VALUES 
      ('John', 18, 'Male', 'john@example.com'),
      ('Mary', 19, 'Female', 'mary@example.com'),
      ('David', 20, 'Male', 'david@example.com'),
      ('Emily', 21, 'Female', 'emily@example.com'),
      ('Jacob', 22, 'Male', 'jacob@example.com'),
      ('Emma', 23, 'Female', 'emma@example.com'),
      ('Noah', 24, 'Male', 'noah@example.com'),
      ('Olivia', 25, 'Female', 'olivia@example.com'),
      ('William', 26, 'Male', 'william@example.com'),
      ('Sophia', 27, 'Female', 'sophia@example.com');
    
    `
)

con.query("select * from students",(error,res)=>{
    console.log(res[2]);
})

*/