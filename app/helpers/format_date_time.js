Ember.Handlebars.helper('format-date-time', function(date, format) {
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
});
