/**
 * Created by Tarun on 8/17/2016.
 */
var _ = require('underscore');

var food = {
    groups:{
        fruits: ['apples', 'banana', 'cherries'],
        vegetables: ['brocolli', 'carrot', 'tomatoes'],
        dairy: ['milk', 'eggs', 'cheese'],
        meats: ['chicken', 'lamb'],
        grains: ['oats', 'wheat', 'rice']
    }
};

var routes = {
    
    home: function (req, res) {
        res.end("Welcome to home page");
    },
    
    fruits: function (req, res) {
        var responseBody = "Examples of fruits: ";
        _.each(food.groups.fruits, function (fruit) {
            responseBody += fruit + " ";
        });
        res.end(responseBody);
    },

    fruits_id: function (req, res) {
        var id = req.params.id;
        var selectedFruit = food.groups.fruits[id];
        if(!selectedFruit) {
            res.statusCode = 404;
            res.end("This fruit does not exist");
        }
        else
            res.end("Fruit with id " + id + " is " + selectedFruit);
    },
    
    veg: function (req, res) {
        var responseBody = "Examples of vegetables: ";
        _.each(food.groups.vegetables, function (veg) {
            responseBody += veg + " ";
        });
        res.end(responseBody);
    },

    veg_id: function (req, res) {
        var id = req.params.id;
        var selectedVeg = food.groups.vegetables[id];
        if(!selectedVeg) {
            res.statusCode = 404;
            res.end("This vegetable does not exist");
        }
        else
            res.end("Vegetable with id " + id + " is " + selectedVeg);
    }
    
};

module.exports = routes;
