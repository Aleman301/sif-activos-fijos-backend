import 'dotenv/config'

import express from 'express';

const PORT= process.env.APP_PORT;

const app =express();
app.listen(3000,()=>{
    console.log(`Server runnig in port: ${PORT}`);
});