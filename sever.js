require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();

const mongo_uri = process.env.MONGODB_mongo_uri;

mongoose.connect(mongo_uri);

app.use(cors());
app.use(bodyParser.json());

const userSchema = new mongoose.Schema({
  name: String,
  crushname: String,
  ratio_of_successfull: Number
})

const crushs = mongoose.model('crushs', userSchema);

app.post('/crushs', async (req, res) => {
  try {
    const newUser = new crushs(req.body);
    await newUser.save();
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening on port 3000'));