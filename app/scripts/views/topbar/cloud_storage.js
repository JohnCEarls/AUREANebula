define([
    'jquery',
    'underscore',
    'backbone',
    'views/base'
], function($, _, Backbone, BaseView) {
    'use strict';
    var CloudStorageView = BaseView.extend({
        //the template file is defined relative to the path /app/scripts/templates
        // see main.js to modify this configuration
        template: 'topbar/modals_cloud_storage.hbs',
        events: {
            'click .gdrive-import': 'browseGdriveLoadItem',
            'click .gdrive-snapshot': 'takeSnapshotSaveToGdrive',
            'click .gdrive-export': 'selectFileSaveToGdrive',
            'click .gdrive-session': 'saveSessionToGdrive'
        },

        initialize: function(options) {
            _.extend(this, options);
            _.bindAll(this, 'browseGdriveLoadItem', 'takeSnapshotSaveToGdrive', 'selectFileSaveToGdrive', 'saveSessionToGdrive');
        },

        browseGdriveLoadItem: function() {
            $('.gdrive-browse-modal').modal('show');
        },

        takeSnapshotSaveToGdrive: function() {
            $('.gdrive-snapshot-modal').modal('show');
        },

        selectFileSaveToGdrive: function() {
            $('.gdrive-export-modal').modal('show');
        },

        saveSessionToGdrive: function() {
            $('.gdrive-session-modal').modal('show');
        }

    });

    return CloudStorageView;
});
