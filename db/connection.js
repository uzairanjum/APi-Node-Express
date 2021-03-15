const mongoose = require('mongoose')

function createConnection(){
    mongoose.connect('mongodb://localhost/new', { useNewUrlParser : true, useUnifiedTopology: true})
.then(()=>{console.log('connected');})
.catch((err)=>{console.log('cant connect', err);
})
 }
 module.exports = createConnection();