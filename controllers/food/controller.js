const Food = require('../../models/food');

const controller = {};

controller.create = (req,res) => {
  console.log('controller firing')
  Food
    .addToFavorites(req.body.food,req.body.amount)
    .then((data) => {
      console.log("BACKEND FOOD CRATE",data)
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('ERROR', err)
    });
};

controller.index=(req,res)=>{
  Food.findAll()
  .then((data)=>{
    console.log("THIS ISNINDEX BACKEND", data)
    res.json({
       data:data
    })

  })
}

// controller.update = (req, res)=> {
//   Food
//     .update(req.body.amount, req.params.food_id)
//     .then((data) => {
//       res.sendStatus(200);
//     })
//     .catch((err) => {
//       console.log('ERROR', err)
//     });
// };

controller.destroy = (req, res) => {
  Food
    .delete(req.params.food_id)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('ERROR', err);
    })
};

module.exports = controller;
