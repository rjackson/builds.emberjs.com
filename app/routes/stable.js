import S3Bucket from 'appkit/models/bucket';

var StableRoute = Ember.Route.extend({
  model: function() {
    var bucket = S3Bucket.create({
      title: 'Latest Stable Builds',
      bucket: 'builds.emberjs.com',
      endpoint: 's3.amazonaws.com',
      prefix: 'stable/',
      delimiter: '/',
      useSSL: false
    });
    return bucket;
  }
});

export default StableRoute;
