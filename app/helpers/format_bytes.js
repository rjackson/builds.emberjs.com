Ember.Handlebars.helper('format-bytes', function(bytes){
  return (bytes / 1024).toFixed(2) + ' KB';
});
