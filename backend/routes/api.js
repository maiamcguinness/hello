/**
 * File: backend/routes/api.js
 * Defined: exports.api
 * Description: Defines our delightful API routing
 * Dependencies: none
 *
 * @package hello
 */

/* Setup */
var User    = require('../models/user.js');

/* API Handling */
// GET /v1/hello
exports.hello = function(req, res) {
    res.json({
        message: 'hiya!'
    });
};

// GET /v1/user
exports.getUsers = function(req, res) {
    User.find(function(err, users){
        if (err)
            res.send(err);

        res.json(users);
    });
};
// POST /v1/user
exports.addUser = function(req, res) {
    var user = new User();

    user.username = req.body.username,
    user.password = req.body.password;
    
    user.save(function(err, user) {
        if (err)
            res.send(err);

        res.json({ message: 'User created!' });
    });
};
