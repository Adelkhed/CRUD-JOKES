const mongoose = require('mongoose');
require('dotenv').config();

const dbName = "Jokes";
const username = "root";
const pw = "root";

console.log(dbName, username, pw); 

const uri = `mongodb+srv://${username}:${pw}@cluster0.nkmdcqp.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;
console.log(uri)
mongoose.connect(uri)
    .then(() => console.log(`📡📡📡 Established a connection to the ${dbName} database`))
    .catch(err => console.log("❌❌❌❌ Something went wrong when connecting to the database", err));
