/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        'jQuery-ui': {
            'deps': ['jquery'],
            'exports': '$'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery', 'jQuery-ui'],
            exports: 'bootstrap'
        },
        handlebars: {
            exports: 'Handlebars',
        },
        d3: {
            exports: 'd3'
        },
        vq: {
            deps: ['d3'],
            exports: 'vq'
        }

    },
    paths: {
        //base libraries
        underscore: '../bower_components/underscore/underscore',
        jquery: '../bower_components/jquery/dist/jquery',
        'jQuery-ui': '../bower_components/jquery-ui/ui/jquery-ui',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
        //backbone
        backbone: '../bower_components/backbone/backbone',
        layoutmanager: '../bower_components/layoutmanager/backbone.layoutmanager',
        //logic
        'mediator-js': '../bower_components/mediator-js/lib/mediator',
        //vis
        d3: '../bower_components/d3/d3',
        vq: '../bower_components/visquick/vq',
        handlebars: '../bower_components/handlebars/handlebars',
        text: '../bower_components/requirejs-text/text',
        json: '../bower_components/requirejs-plugins/src/json',
        propertyParser: '../bower_components/requirejs-plugins/propertyParser'
    }
});
require([
    'jquery', 'underscore', 'backbone', 'bootstrap', 'app', 'layoutmanager'
], function($, _, Backbone, Bootrap, App, layoutmanager) {

    //Configure LayoutManager
    //Backbone.Layout.configure({ was getting jshint error, trying with
    //layoutmanager variabla
    layoutmanager.configure({
        //all templates are relative to this path
        prefix: 'app/scripts/views/templates/',
        //treat all Backbone Views as Layouts
        manage: true
    });

    window.app = 'NA';
    window[window.app] = new App();
    //inject Backbone, jQuery, Underscore as global objects.
    window.Backbone = Backbone;
    window.$ = window.jQuery = $;
    window._ = _;

    window[window.app].start();
});
