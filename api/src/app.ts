import express from 'express'
// import lusca from 'lusca'
import dotenv from 'dotenv'

import makeupRouter from './routers/makeupRouter'
import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'

dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.set('port', process.env.PORT || 3000)

// Global middleware
app.use(apiContentType)
app.use(express.json())

// Set up routers
app.use('/api/v1/makeupProduct', makeupRouter)

// Custom API error handler
app.use(apiErrorHandler)

export default app

// import Express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cors from "cors";

// import makeupRouter from "./routers/makeupRouter";
// import apiErrorHandler from './middlewares/apiErrorHandler'
// import apiContentType from './middlewares/apiContentType'

// const uri =
//   "mongodb+srv://Meena:Senthil1693@demo.5iidkyl.mongodb.net/ecommerce?retryWrites=true&w=majority";

// const app = Express();
// app.use(Express.json());
// app.use(cors());

// mongoose.connect(
//   uri,
//   {
//     //   useNewUrlParser: true,
//     //   useUnifiedTopology: true,
//   },
//   (error) => {
//     if (error) {
//       throw error;
//     }
//     console.log("database connected");
//     app.listen(3300, () => console.log("running"));
//   }
// );

// dotenv.config();

// // routes here
// app.use(apiContentType)

// // Set up routers
// app.use('/api/v1/makeupProducts', makeupRouter)

// // Custom API error handler
// app.use(apiErrorHandler)

// export default app;
