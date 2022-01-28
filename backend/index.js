const express = require('express')
const app = express()
const port = 5000
const connectToMongo = require('./db')

connectToMongo();

app.use(express.json());

app.use('/api/auth',require('./routes/auth'));
app.use('/api/inventory',require('./routes/inventory'));
app.use('/api/executives',require('./routes/executives'));
app.use('/api/orders',require('./routes/orders'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})