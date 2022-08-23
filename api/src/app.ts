import express from 'express'
// import lusca from 'lusca'
import dotenv from 'dotenv'
import cors from "cors";

import productRoute from './routers/makeupRouter'
import userRoute from './routers/userRouter'
import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'

dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.set('port', process.env.PORT || 8000)

// Global middleware
app.use(apiContentType)
app.use(express.json())
app.use(cors());


// Set up routers
app.use('/api/v1/makeupProduct/seedProduct', productRoute)
app.use('/api/v1/users', userRoute)

// Custom API error handler
app.use(apiErrorHandler)

export default app

