import S3Bucket from 'appkit/models/bucket';

var DailyRoute = Ember.Route.extend({
  model: function() {
    var bucket = S3Bucket.create({
      title: 'Daily Development Builds',
      bucket: 'builds.emberjs.com',
      endpoint: 's3.amazonaws.com',
      prefix: 'daily/',
      marker: moment().subtract('days', 2).format("YYYYMMDD"),
      maxKeys: 10,
      useSSL: false
    });
    return bucket;
  }
});

export default DailyRoute;