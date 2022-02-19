const Cost = require("../../db/models/costs/index");

module.exports.getAllCost = (req, res) => {
  Cost.find().then((result) => {
    res.send({ data: result });
  });
};

module.exports.createNewCost = (req, res) => {
  try {
    const { text, totalMoney, date } = req.body;
    const cost = new Cost({
      text,
      totalMoney,
      date,
    });
    cost.save().then(() => {
      Cost.find().then((result) => {
        res.send({ data: result });
      });
    });
  } catch {
    res.status(422).send("Error! Params not correct");
  }
};

module.exports.changeCostInfo = (req, res) => {
  const { body } = req;
  if (
    body.hasOwnProperty("_id") &&
    (body.hasOwnProperty("text") ||
      body.hasOwnProperty("totalMoney") ||
      body.hasOwnProperty("date"))
  ) {
    Cost.updateOne({ _id: body._id }, body).then(() => {
      Cost.find().then((result) => {
        res.send({ data: result });
      });
    });
  } else {
    res.status(422).send("Error! Params not correct");
  }
};

module.exports.deleteCost = (req, res) => {
  const id = req.query.id;
  if (id) {
    Cost.deleteOne({ _id: id }).then(() => {
      Cost.find().then((result) => {
        res.send({ data: result });
      });
    });
  } else {
    res.status(422).send("Error! Params not correct");
  }
};
