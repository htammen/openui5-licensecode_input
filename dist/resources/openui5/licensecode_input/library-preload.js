//@ui5-bundle openui5/licensecode_input/library-preload.js
sap.ui.predefine("openui5/licensecode_input/LicenseCode",["sap/ui/core/Control","openui5/licensecode_input/LicenseCodeRenderer","./library","sap/m/Input","sap/ui/model/json/JSONModel","openui5/licensecode_input/type/LicenseCodeType","sap/m/delegate/ValueStateMessage","sap/ui/core/ValueState"],function(e,t,n,i,o,r,s,a){var l=e.extend("openui5.licensecode_input.LicenseCode",{metadata:{library:"openui5.licensecode_input",aggregations:{},properties:{value:{type:"string"},valueState:{type:"sap.ui.core.ValueState",group:"Appearance",defaultValue:sap.ui.core.ValueState.None},valueStateText:{type:"string",group:"Misc",defaultValue:null},controlCount:{type:"int",defaultValue:4},singleControlLength:{type:"int",defaultValue:4}}},innerControls:null,renderer:t,init:function(){if(e.prototype.init){e.prototype.init.apply(this,arguments)}this.model=new o({values:[]});this.model.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);this._oValueStateMessage=new s(this)},exit:function(){if(this._oValueStateMessage){this._oValueStateMessage.destroy()}this._oValueStateMessage=null},onAfterRendering:function(){var e=new r;e.setErrorMsg(this.getValueStateText());e.setChunkCount(this.getControlCount());e.setChunkLength(this.getSingleControlLength());this.getBinding("value").setType(e);this.getControls()},onfocusin:function(){if(this.getValueState()!==a.None){if(this._oValueStateMessage){this._oValueStateMessage.open()}}},onfocusout:function(){if(this._oValueStateMessage){this._oValueStateMessage.close()}},getDomRefForValueStateMessage:function(){return this.getFocusDomRef()},getFocusDomRef:function(){return this.getDomRef()},getControls:function(){if(!this.innerControls||this.innerControls.length===0&&this.getControlCount()>0){var e=[];var t=this._sliceValue(this._getValueInternal(),this.getSingleControlLength());for(var n=0;n<this.getControlCount();n++){this.model.setProperty("/value"+n,t[n])}this.model.setProperty("values",t);for(var n=0;n<this.getControlCount();n++){var o=t[n]?t[n]:"";var r=new i({value:{path:"/value"+n,type:"sap.ui.model.type.String",constraints:{minLength:this.getSingleControlLength(),maxLength:this.getSingleControlLength()}},maxLength:this.getSingleControlLength(),required:true,width:this.getInputFieldLength()+"rem",textAlign:"Center"});r.addStyleClass("sapUiResponsiveContentPadding");r.setModel(this.model);r.setFieldGroupIds(["licenseCodeFieldGroup"]);r.attachValidateFieldGroup(this._inputChanged,this);r.attachLiveChange(this._inputLiveChanged,this);e.push(r)}this.innerControls=e}return this.innerControls},getInputFieldLength:function(){if(this.getSingleControlLength()<4){return this.getSingleControlLength()*1.15}if(this.getSingleControlLength()<6){return this.getSingleControlLength()*1.02}if(this.getSingleControlLength()<8){return this.getSingleControlLength()*1.002}return this.getSingleControlLength()},getValue:function(){return this._getValueInternal()},_getValueInternal:function(){var e=[];if(this.innerControls){for(var t=0;t<this.innerControls.length;t++){var n=this.innerControls[t].getValue();for(var i=n.length;i<this.getSingleControlLength();i++){n+=" "}e.push(n)}}return e.join("")},_sliceValue:function(e,t){var n=[];var i=Math.floor(e.length/t)+1;for(var o=0;o<i;o++){var r=e.substr(o*t,t);n.push(r)}var s=n.length;for(var o=s;o<this.getControlCount();o++){n.push("")}return n},_inputChanged:function(e){},_inputLiveChanged:function(e){var t=e.getSource().getBinding("value").getPath().charAt(e.getSource().getBinding("value").getPath().length-1);let n=this._getValueInternal().split("");for(let i=0;i<e.getParameter("newValue").length;i++){n[t*this.getSingleControlLength()+i]=e.getParameter("newValue").charAt(i)}this.getModel().setProperty(this.getBindingPath("value"),n.join(""))},setValueState:function(e){var t=this.getValueState();this.setProperty("valueState",e,true);this.rerender();e=this.getValueState();if(e===t){return this}var n=this.getDomRef();if(!n){return this}return this}});return l});
sap.ui.predefine("openui5/licensecode_input/LicenseCodeRenderer",[],function(){"use strict";var e={render:function(e,t){e.write("<div");e.writeControlData(t);e.writeClasses();if(t.getBinding("value").getDataState().getMessages().length>0){e.addStyle("border","solid 2px red");e.writeStyles()}e.write(">");var i=t.getControls();for(var r=0;r<i.length;r++){if(r>0){e.write("<div");e.addStyle("width","2rem");e.addStyle("display","inline-block");e.addStyle("text-align","center");e.addStyle("vertical-align","bottom");e.addStyle("line-height","3rem");e.writeStyles();e.write(">");e.write(" - ");e.write("</div>")}e.write("<div");e.addStyle("display","inline-block");e.writeStyles();e.write(">");e.renderControl(i[r]);e.write("</div>")}e.write("</div>")}};return e},true);
sap.ui.predefine("openui5/licensecode_input/library",[],function(){"use strict";return sap.ui.getCore().initLibrary({name:"openui5.licensecode_input",dependencies:["sap.ui.core"],controls:["openui5.licensecode.licensecodeInput"],noLibraryCSS:true,version:"1.0.0"})});
sap.ui.predefine("openui5/licensecode_input/type/LicenseCodeType",["sap/ui/model/type/String","sap/ui/model/ValidateException"],function(e,n){"use strict";var t=e.extend("openui5.licensecode_input.LicenseCodeType",{errorMsg:"Invalid value",chunkCount:4,chunkLength:4,constructor:function(){e.apply(this,arguments);this.name="LicenseCode"},setErrorMsg:function(e){this.errorMsg=e},setChunkCount:function(e){this.chunkCount=e},setChunkLength:function(e){this.chunkLength=e},formatValue:function(e){return e},parseValue:function(e){return e},validateValue:function(e){if(e.trim().length<this.chunkCount*this.chunkLength||!/^[^ ]*$/.test(e)){throw new n(this.errorMsg)}}});return t});
sap.ui.require.preload({
	"openui5/licensecode_input/manifest.json":'{"sap.app":{"id":"openui5.licensecode_input","type":"library","applicationVersion":{"version":"1.0.0"},"title":"An OpenUI5 library with a license code input control"},"sap.ui":{"technology":"UI5","deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"dependencies":{"minUI5Version":"1.52.0","libs":{"sap.ui.core":{},"sap.m":{"lazy":true}}},"contentDensities":{"compact":true,"cozy":true}}}'
});