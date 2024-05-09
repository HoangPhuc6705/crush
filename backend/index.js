const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express')

const mongoose_uri = 'mongodb+srv://tonguyenhoangphuc6705:hp672005@cluster0.k6yyrke.mongodb.net/form?retryWrites=true&w=majority&appName=Cluster0';

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(mongoose_uri);

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
    console.error('Error:',error);
  }
});

const port = 3000;
app.listen(port, () => {
  console.log('Sever is running on:', port);
})