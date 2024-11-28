const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors()); // Enable CORS for all routes