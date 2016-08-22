
/*!
 * Module dependencies.
 */

var env = process.env.NODE_ENV || 'development';
var dbConfig = require('../../config/database')[env];
var versionConfig = require('../../config/version')[env];
var models = require('../models');
var Q = require('q');
var _ = require('lodash');


exports.index = function (req, res) {
    res.render('index');
};

exports.status = function (req, res) {

    Q.all([
        models.Visualization.count(),
        models.Session.count(),
        models.VisualizationType.findAll(),
    ]).spread(function(vizCount, sessionCount, vizTypes) {
        return res.json({
            server_version: versionConfig.version,
            database: dbConfig.dialect,
            visualizations: vizCount,
            sessions: sessionCount,
            visualizationTypes: _.map(vizTypes, function(vt) {return vt.name;})
        });    
    });
    
};

