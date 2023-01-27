const express = require('express')
const app = express()

app.get('/', (req, res) => {
    //funcao de callback, precisa ser funcao anonima, sem nome definido, apenas function(){},pode ser escrita arrow function ()=>{}
    res.send('Hello World')
})

app.listen(3000)