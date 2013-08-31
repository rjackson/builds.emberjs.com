var IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('releases');
  }
});

export default IndexRoute;
