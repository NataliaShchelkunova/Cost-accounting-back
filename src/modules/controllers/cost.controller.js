const Cost = require('../../db/models/costs/index');

module.exports.getAllCost = (req, res) => {
  Cost.find().then(result => {
    res.send({ data: result });
  });
};

module.exports.createNewCost = (req, res) => {
  const { body } = req;
  const cost = new Cost({
    text: body.text,
    totalMoney: body.totalMoney,
    date: body.date
  });
  cost.save().then(result => {
    Cost.find().then(result => {
      res.send({ data: result });
    });
  });
}

module.exports.changeCostInfo = (req, res) => {
  const { body } = req;
  if (body.hasOwnProperty('_id') && (body.hasOwnProperty('text') || body.hasOwnProperty('totalMoney') || body.hasOwnProperty('date'))) {
    Cost.updateOne({ _id: body._id }, body).then(result => {
      Cost.find().then(result => {
        res.send({ data: result });
      });
    });
  }
  else {
    res.status(422).send('Error! Params not correct');
  };
};

module.exports.deleteCost = (req, res) => {
  const id = req.query.id;
  if (id) {
    Cost.deleteOne({ _id: id }).then(result => {
      Cost.find().then(result => {
        res.send({ data: result });
      });
    });
  } else {
    res.status(422).send('Error! Params not correct');
  };
};





