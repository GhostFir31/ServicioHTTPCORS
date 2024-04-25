const express = require('express');
const app = express();

const router = require('./router/rutas'); 

const PORT = 3000;

app.use('/', router); 

app.listen(PORT, () => {
  console.log("Server running on port "+ PORT);
});
