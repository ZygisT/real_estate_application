const express = require('express');
const mongodb = require('mongodb')
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Get data from collection and send it to frontend
app.get('/api/posts', async (req, res) => {
  const data = await loadDataCollection();
  res.send(await data.find({}).toArray());
})

// Connect to DB and fetch the collection of data
async function loadDataCollection() {
  const client = await mongodb.MongoClient.connect('', {
    useNewUrlParser: true
  });
  return client.db('').collection('')
}

// Uncomment code below to serve static build of the app

// app.use('/', express.static(path.join(__dirname, "client/build")))

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/build/index.html'))
// })

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))