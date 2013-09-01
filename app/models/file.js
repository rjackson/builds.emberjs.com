var S3File = Ember.Object.extend({
  scriptTag: function(){
    var escapedURL = Handlebars.Utils.escapeExpression(this.get('url'));

    return new Handlebars.SafeString('<script src="' + escapedURL + '"></script>').toString();
  }.property('url'),

  url: function(){
    return this.get('baseUrl') + '/' + this.get('relativePath');
  }.property('baseUrl', 'relativePath')
});

export default S3File;
