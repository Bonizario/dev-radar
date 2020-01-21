const express = require('express'); 
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://omnistack:gabriel157@cluster0-0jwb3.mongodb.net/omnistack10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(cors());
app.use(express.json()); // Precisa vir antes das rotas
app.use(routes);

app.listen(3333);
