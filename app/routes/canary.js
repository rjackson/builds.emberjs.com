import S3Bucket from 'appkit/models/bucket';

var CanaryRoute = Ember.Route.extend({
  model: function() {
    var bucket = S3Bucket.create({
      title: 'Latest Canary Builds',
      bucket: 'builds.emberjs.com',
      endpoint: 's3.amazonaws.com',
      prefix: 'latest/',
      delimiter: '/',
      useSSL: false
    });
    return bucket;
  }
});

export default CanaryRoute;
