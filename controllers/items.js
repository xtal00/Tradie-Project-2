const Item = require('../models/item');
const User = require('../models/user');

module.exports = {
  index,
  show,
  new: newItem,
  create,
  delete: deleteItem,
  edit,
  update
};
function update(req, res) {
    req.body.done = req.body.done === 'on';
    // The following will also do the job
    // req.body.done = !!req.body.done;
    Item.updateOne(req.params.id, req.body);
    res.redirect('/items');
  }

  function updateOne(id, item) {
    // Find the index based on the id of the item object
    const idx = items.findIndex(item => item.id === parseInt(id));
    // Ensure the id is copied over
    item.id = parseInt(id);
    items.splice(idx, 1, item);
  }
  
  function edit(req, res) {
    res.render('items/edit', {
      item: Item.getOne(req.params.id)
    });
  }
  
  function deleteItem(req, res) {
    Item.deleteOne(req.params.id);
    res.redirect('/items');
  }


function index(req, res) {
  Item.find({}, function(err, items) {
    res.render('items/index', { title: 'All Items', items });
  });
}

function show(req, res) {
  Item.findById(req.params.id, function(err, item) {
    res.render('items/show', { title: 'Item Detail', item });
    console.log(item)
  });
}

function newItem(req, res) {
  res.render('items/new', { title: 'Add Item' });
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  const item = new Item(req.body);
  item.save(function(err) {
    // one way to handle errors
    if (err) return res.redirect('/items/new');
    console.log(item);
    // for now, redirect right back to new.ejs
    res.redirect('/items');
  });
}
