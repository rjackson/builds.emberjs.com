Ember.Handlebars.helper('formatDateTime', function(date, format) {
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
});