var CopyClipboardComponent = Ember.Component.extend({
  tagName: 'span',

  didInsertElement: function () {
    var clip = new ZeroClipboard(this.$('a'), {
      // This would normally be a relative path
      moviePath: "/assets/ZeroClipboard.swf",

      trustedDomains: ["*"],
      allowScriptAccess: "always"
    });
  }
});

export default CopyClipboardComponent;
