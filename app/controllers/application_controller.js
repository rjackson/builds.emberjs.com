var ApplicationController = Em.ObjectController.extend({
  currentYear: function(){
    var date = new Date();

    return date.getUTCFullYear();
  }.property()
});

export default ApplicationController;
