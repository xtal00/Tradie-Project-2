const Item = require('../models/item');

module.exports = {
    create,
    delete: deleteReview
}

function create(req,res){
    Item.findById(req.params.id,function(err, item){
        item.review.push(req.body);
        item.save(function(err){
            res.redirect(`/climbs/${item._id}`);
        })
    })
}

function deleteReview(req, res){
    Item.findById(req.params.id, function(err, item){
            res.redirect(`/climbs/${item._id}`);
    })
}