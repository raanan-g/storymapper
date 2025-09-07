const express = require('express');
const app = express();
app.use(express.static(__dirname));
app.listen(5170, () => console.log('Legacy site -> http://localhost:5170'));
