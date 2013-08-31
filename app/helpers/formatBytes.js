Ember.Handlebars.helper('formatBytes', function(bytes){
  return (bytes / 1024).toFixed(2) + ' KB';
});
