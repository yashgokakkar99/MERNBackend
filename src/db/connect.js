const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Company')
.then(()=>{
    console.log(`Database connection successfull !!`)
})
.catch((e)=>{
    console.log(`Database not connected :(`)
})