import express from 'express';
import conndb from './config/db.js';
import {register} from './controllers/userController.js'
import {login} from './controllers/userController.js'
import cors from 'cors'
const app = express()

app.use(express.json());
app.use(cors("*"));
const port = 3000

conndb();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', register)
app.post('/login',login)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
