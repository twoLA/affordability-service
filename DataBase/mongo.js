const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mortgage', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', (err) => {
  if (err) {
    console.log("we're connected!");
  }
});

const PriceModel = mongoose.model('Price', new mongoose.Schema({ id: Number, homePrice: Number }));

const AgentModel = mongoose.model('Agent', new mongoose.Schema({
  name: String,
  title: String,
  phone: String,
  rating: Number,
  sales: Number,
}));
const ScheduleModel = mongoose.model('Schedule', new mongoose.Schema({
  in_person: Boolean,
  date: String,
  time: String,
  name: String,
  phone: String,
  email: String,
  financing: Boolean,
}));

module.exports.Price = PriceModel;
module.exports.Agent = AgentModel;
module.exports.Schedule = ScheduleModel;
module.exports.db = db;
