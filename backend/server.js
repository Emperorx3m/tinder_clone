import express from "express";
import mongoose from "mongoose";
import Cors from 'cors';
import Cards from "./dbCards.js";

//app config
const app = express()
const port = process.env.PORT || 3003;
// const dbconn = 'mongodb://localhost:27017/tinder_db';
const dbconn = 'mongodb://cli:password@127.0.0.1:27017/tinder_db?authMechanism=DEFAULT&authSource=admin';

//middlewares
app.use(express.json());
app.use(Cors());


//db config

const connectWithRetry = () => {
    return mongoose.connect(dbconn)
      .then(() => {
        console.log('MongoDB connected successfully');
      })
      .catch(err => {
        console.error('Failed to connect to MongoDB on startup - retrying in 5 seconds', err);
        setTimeout(connectWithRetry, 5000); // Retry after 5 seconds
      });
  };
  
  // Start the connection attempt
  connectWithRetry();


//api endpoints
app.get('/', (req, res) => res.status(200).send("HOLA HUEVO"));
app.post('/tinder/cards', (req, res) => {
    const dbCards = req.body;
    
    try {
      dbCards.forEach(dbc => {
        console.log("dbcards", dbc)
        Cards.create(dbc)
      .then(data => {
        console.log('Card  created:', data);
      })
      .catch(err => {
        console.error('Error creating user:', err);
        res.status(500).send(err)
      });
      });
      res.status(201).send(data);

    } catch (error) {
      res.status(500).send({"Array of objects needs name and imgUrl": error})
    }
    
      
})

app.get('/tinder/cards', (req, res) => {
    Cards.find()
    .then(data => {
      console.log('Cards found:', data);
      res.status(200).send(data);
    })
    .catch(err => {
      console.error('Error finding cards:', err);
      res.status(500).send(err)
    });
})


//listener
app.listen(port, () => console.log(`listening on localhost ${port}`))