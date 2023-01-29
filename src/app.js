const express = require('express')
const app = express()
const path = require('path')
const hbs = require("hbs");
const partials_path = path.join(__dirname, "../views/partials");
const port = process.env.PORT || 3000
const Register = require("./models/formSchema")
const log = require("./models/logSchema")


// Database connectivity
require("./db/connect")

hbs.registerPartials(partials_path);

app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.set("view engine", "hbs")

app.get('/', (req, res) => {
  res.render("index")
})

app.get('/register', (req, res) => {
  res.render("register")
})

app.post('/register', async(req, res)=>{
  try{
    const password = req.body.password
    const cpass = req.body.repass
    if(password === cpass)
    {
      const registerEmployee = new Register({
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        mno:req.body.mno,
        password:req.body.password,
        repass:req.body.repass
      })

      const registered = await registerEmployee.save()
      res.status(201).prependOnceListenerder(index)
    }
    else{
      res.send("Password are not matching")
    }
  }
  catch(error){
    res.status(400).send(error)
  }
})

app.get('/login', (req, res) => {
  res.render("login")
})

app.post('/login',async (req,res)=>{
  try{
    const email1 = req.body.em
    const password1 = req.body.pass
    const useremail = await Register.findOne({email:email1})
    if(useremail.password === password1){
      // const emplog = new logs({
      //   em:req.body.em,
      //   pass:req.body.pass
      // })
      // const logged = await emplog.save()
      res.status(201).render("index")
    }
    else{
      res.send("Wrong Password")
    }
  }catch(error){
    res.status(400).send("Invalid Email")
  }
})

// app.get('/index',(req,res) => {
//     res.send(path.join())
// })

app.listen(port, () => {
  console.log(`Server listening on port : ${port}`)
})