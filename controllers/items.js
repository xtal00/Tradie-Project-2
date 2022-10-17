const Item = require('../models/item');
const User = require('../models/user');

module.exports = {
  index,
  show,
  new: newItem,
  create,
  delete: deleteItem,
  edit,
};

function index(req, res) {
  Item.find({}, function(err, items) {
    res.render('items/index', { title: 'All Items', items });
  });
}


function edit(req, res) {
  Item.findOne({_id: req.params.id}, function(err, item){
    res.render('items/edit',{
        item,
        user: req.user
    })
    console.log(item)
  
})
  }
  
  function deleteItem(req, res) {
    Item.findOne({_id: req.params.id}, function(err, item){
      item.remove();
      item.save(function(err){
          res.redirect('/items')
      })
  })

  }


function show(req, res) {
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    let sortKey = req.query.sort || 'name';

    Item.find(modelQuery)
    .sort(sortKey).exec(function(err, users){
      Item.findById(req.params.id, function(err, item){
            res.render('items/show', {
                item,
                user: req.user
            })
        })
    })
}

function newItem(req, res) {
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    let sortKey = req.query.sort || 'name';
    Item.find(modelQuery)
    .sort(sortKey).exec(function(err, users){
        if(err) return next(err);
        res.render('items/new', {
            user: req.user,
            name: req.query.name
        });
    }) 
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  const item = new Item(req.body);
  item.save(function(err) {
    // one way to handle errors
    if (err) return res.redirect('/items/new');
    // for now, redirect right back to new.ejs
    res.redirect('/items');
  });
}
