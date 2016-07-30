Library.module('UsersApp.List', function (List, Library, Backbone, Marionette, $, _) {
    List.User = Marionette.ItemView.extend({
        template: '#users-list-template',
        tagName: 'tr',
        ui:{
          'assigned-book':'td a.js-show-assigned-books',
            'show':'td a.js-show',
            'assign-list':'td a.js-assign-list'
        },
        events: {
            'click @ui.assigned-books':'showBooksClicked',
            'click @ui.show': 'showClicked',
            'click @ui.assign-list': 'showAssignListClicked'
        },
        showClicked: function(e){
            e.preventDefault();
            this.trigger('user:show', this.model);
        },
        showBooksClicked: function(e){
            e.preventDefault();
            this.trigger('user:showBooksClicked', this.model);
        },
        showAssignListClicked: function(e){
            e.preventDefault();
            this.trigger('user:showAssignList', this.model);
        }

    });
    List.Users = Marionette.CompositeView.extend({
        tagName: 'table',
        className: 'table table-bordered',
        childView: List.User,
        template: '#users-list',
        childViewContainer: 'tbody'
    });
});
