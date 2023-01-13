const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//CHANGE THE MONGO URL 
mongoose.connect("mongodb+srv://sahil:sahil@done.3raaw7v.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection
  .once('open', () => console.log('Connected to the database!'))
  .on('error', err => console.log('Error with the database!', err));

