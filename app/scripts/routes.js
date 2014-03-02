/*global define*/

define([
    'underscore',
    'jquery',
    'backbone',
], function(_, $, Backbone) {
    'use strict';

    var Router = Backbone.Router.extend({
        routes: {
            '': 'openApplication',
        },
        openApplication: function() {

        },
    });

    return Router;
});
