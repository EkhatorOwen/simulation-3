require('dotenv').config()

const express = require('express')
const { json } = require('body-parser')
const cors = require('cors')
const massive = require('massive')
const app = express();
const port = 4000

massive(process.env.CONNECTION_STRING)
        .then(db=>app.set('db',db))
        .catch(console.log)
        
app.use(json())
app.use(cors())



app.listen(port, ()=>{
    console.log('Now listening on port', port)
})
