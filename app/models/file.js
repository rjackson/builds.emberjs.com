var S3File = Ember.Object.extend({
  url: function(relativePath){
    return this.get('baseUrl') + '/' + relativePath;
  }.property('baseUrl', 'relativePath')
});

export default S3File;