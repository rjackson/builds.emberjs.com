import S3File from 'appkit/models/file';

var S3Bucket = Ember.Object.extend({
  files: [],

  protocol: function() {
    return this.get('useSSL') ? 'https://' : 'http://';
  }.property('useSSL'),

  hostname: function(){
    return (!this.get('bucket')) ? this.get('endpoint') : this.get('bucket') + '.' + this.get('endpoint');
  }.property('bucket','endpoint'),

  delimiterParameter: function(){
    var delimiter = this.getWithDefault('delimiter','').toString();
    return (delimiter) ? 'delimiter=' + delimiter : '';
  }.property('delimiter'),

  markerParameter: function(){
    return 'marker=' + this.getWithDefault('marker','').toString();
  }.property('marker'),

  maxKeysParameter: function(){
    return 'max-keys=' + this.getWithDefault('maxKeys','').toString();
  }.property('maxKeys'),

  prefixParameter: function(){
    return 'prefix=' + this.getWithDefault('prefix','').toString();
  }.property('prefix'),

  baseUrl: function(){
    return this.get('protocol') + this.get('hostname');
  }.property('protocol', 'hostname'),

  queryParams: function(){
    return this.get('delimiterParameter')  + '&' +
           this.get('markerParameter')     + '&' +
           this.get('maxKeysParameter')    + '&' +
           this.get('prefixParameter');
  }.property('delimiterParameter','markerParameter','maxKeysParameter','prefixParameter'),

  url: function(){
    return this.get('baseUrl') + '?' + this.get('queryParams');
  }.property('baseUrl','queryParams'),

  filesPresent: function(){
    return this.get('files').length;
  }.property('files.@each'),

  load: function(){
    var self = this,
        baseUrl = this.get('baseUrl');

    Ember.$.get(this.get('url'), function(data){
      self.set('response', data);

      var contents = data.getElementsByTagName('Contents'),
      length   = contents.length,
      files    = [];

      for(var i = 0; i < length; i++) {
        var size = contents[i].getElementsByTagName('Size')[0].firstChild.data,
            name = contents[i].getElementsByTagName('Key')[0].firstChild.data,
            lastModified = new Date(contents[i].getElementsByTagName('LastModified')[0].firstChild.data);

        files.push(
          S3File.create({
            name: name,
            size: size,
            lastModified: lastModified,
            relativePath: name,
            baseUrl: baseUrl
          })
        );
      }

      self.set('files', files.sort(function(a,b){
        return b.lastModified - a.lastModified;
      }));
    });
  }.observes('queryUrl').on('init')
});

export default S3Bucket;
