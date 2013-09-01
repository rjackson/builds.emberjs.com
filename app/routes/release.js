import S3Bucket from 'appkit/models/bucket';

var ReleaseRoute = Ember.Route.extend({
  model: function() {
    var bucket = S3Bucket.create({
      title: 'Latest Release Builds',
      bucket: 'builds.emberjs.com',
      endpoint: 's3.amazonaws.com',
      prefix: 'stable/',
      delimiter: '/',
      useSSL: false
    });
    return bucket;
  }
});

export default ReleaseRoute;
