const First = require('../models/first.model');
exports.add = function (req, res,next) {
  console.log(req.body);
  let product = new First(
      {
          name: req.body.name,
          price: req.body.price
      }
  );

  product.save(function (err) {
      if (err) {
          return next(err);
      }
      res.send('Product Created successfully')
  })
};
//for viewing the product based on id
exports.product_details = function (req, res) {
  First.findById(req.params.id, function (err, product) {
      if (err) return next(err);
      res.send(product);
  })
};
//Update
exports.product_update = function (req, res) {
  First.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
      if (err) return next(err);
      res.send('Product udpated.');
  });
};

//delete

exports.product_delete = function (req, res) {
  First.findByIdAndRemove(req.params.id, function (err) {
      if (err) return next(err);
      res.send('Deleted successfully!');
  })
};