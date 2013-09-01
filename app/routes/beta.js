import S3Bucket from 'appkit/models/bucket';

var BetaRoute = Ember.Route.extend({
  model: function() {
    var bucket = S3Bucket.create({
      title: 'Latest Beta Builds',
      bucket: 'builds.emberjs.com',
      endpoint: 's3.amazonaws.com',
      prefix: 'beta/',
      delimiter: '/',
      useSSL: false
    });
    return bucket;
  }
});

export default BetaRoute;
