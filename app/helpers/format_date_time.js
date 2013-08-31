Ember.Handlebars.helper('format-date-time', function(date, format) {
  return moment(date).fromNow();
});
