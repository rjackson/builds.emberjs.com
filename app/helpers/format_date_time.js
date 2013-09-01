Ember.Handlebars.helper('format-date-time', function(date) {
  return moment(date).fromNow();
});
