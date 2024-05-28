const express = require('express');
const connectDB = require('./database/connectDb');
const cors = require('cors');
const dotenv = require('dotenv');
const multipart = require('connect-multiparty');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(multipart());

const corsOptions = {
    origin: 'http://localhost:3000', // Adjust according to your frontend's origin
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

connectDB();


app.get('/test', (req, res) => {
    res.send("Test Api is Working ...!");
});


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});