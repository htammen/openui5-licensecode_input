sap.ui.define([
  'sap/ui/core/UIComponent',
], function(UIComponent) {
  'use strict';

  return UIComponent.extend('htammen.demo.openui5.licensecode_input.Component', {
    metadata: {
      manifest: 'json',
    },

    init: function() {
      UIComponent.prototype.init.apply(this, arguments);
    },
  });
});
