import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import ProductRoute from './routes/ProductRoute.js'



const app = express()

app.use(cors({origin: '*',credentials: true}))
app.use(express.json())

app.use(ProductRoute)



console.log(process.env.PORT);
app.listen(process.env.PORT,()=> {
    console.log('backend running ...')

})