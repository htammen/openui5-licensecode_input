sap.ui.define(
  [
    "sap/ui/core/message/ControlMessageProcessor",
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageItem",
    "sap/m/MessagePopover",
    "sap/m/MessageToast",
    "sap/ui/core/message/Message",
    "sap/ui/core/MessageType",
    "sap/ui/core/ValueState",
    "sap/ui/model/json/JSONModel",
    "openui5/licensecode_input/LicenseCode",
  ],
  function (
    ControlMessageProcessor,
    Controller,
    MessageItem,
    MessagePopover,
    MessageToast,
    Message,
    MessageType,
    ValueState,
    JSONModel,
    LicenseCode
  ) {
    "use strict";

    return Controller.extend("mlauffer.demo.openui5.validator.controller.App", {
      onInit: function () {
        this._initMessageManager();
        this.getView().setModel(
          new JSONModel({
            licenseCode0: "",
            licenseCode1: "",
            licenseCode2: "",
          })
        );
      },

      onSave: function () {
        this._messageManager.removeAllMessages();
        this.validateLicenseCode("licenseCode0");
        this.validateLicenseCode("licenseCode1");
        this.validateLicenseCode("licenseCode2");
        this.getView()
          .byId("btMessagePopover")
          .setText(this._messageManager.getMessageModel().getData().length);
      },

      validateLicenseCode: function (id) {
        const oControl = this.byId(id);
        oControl.setValueState(ValueState.None);
        this.getView().byId("btMessagePopover").setVisible(false);
        try {
          oControl
            .getBinding("value")
            .getType()
            .validateValue(oControl.getValue());
          oControl.setValueState(ValueState.None);
        } catch (ex) {
          this._messageManager.addMessages(
            new Message({
              message: ex.message,
              type: MessageType.Error,
              target:
                (oControl.getBinding("value").getContext()
                  ? oControl.getBinding("value").getContext().getPath() + "/"
                  : "") + oControl.getBinding("value").getPath(),
              processor: oControl.getBinding("value").getModel(),
            })
          );
          oControl.setValueState(ValueState.Error);
          this.getView().byId("btMessagePopover").setVisible(true);
        }
      },

      onMessagePopoverPress: function (evt) {
        this._messagePopover.toggle(evt.getSource());
      },

      _initMessageManager: function () {
        // Initialize the message processor and message manager
        this._messageManager = sap.ui.getCore().getMessageManager();
        // this._messageManager.registerMessageProcessor(
        //   new ControlMessageProcessor()
        // );
        this._messageManager.registerObject(this.getView(), true);

        // Initialize the Message Popover used to display the errors
        this._messagePopover = new MessagePopover({
          items: {
            path: "message>/",
            template: new MessageItem({
              description: "{message>description}",
              type: "{message>type}",
              title: "{message>message}",
            }),
          },
        });
        this._messagePopover.setModel(
          this._messageManager.getMessageModel(),
          "message"
        );
      },

      _onValidationSuccess: function () {
        this._messagePopover.close();
        this.getView().byId("btMessagePopover").setVisible(false);
        MessageToast.show("Form is valid! No errors!");
      },

      _onValidationError: function (errors) {
        this._messageManager.addMessages(errors);
        this.getView().byId("btMessagePopover").setText(errors.length);
        this.getView().byId("btMessagePopover").setVisible(true);
        MessageToast.show("Form is invalid! It contains errors!");
      },
    });
  }
);
