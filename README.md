# openui5-licensecode_input

[![npm](https://img.shields.io/npm/v/openui5-licensecode_input)](https://www.npmjs.com/package/openui5-licensecode_input)
![NPM](https://img.shields.io/npm/l/openui5-licensecode_input)

An OpenUI5 library to enter a license code, registration code or ...

## Description

This control enables you to split the input of a lengthly structured user input into a number of small chunks.  
Often your user has to enter a registration code, license code, security code, ... which consists of a lengthly string
with a lot of special characters ($%&-...).  
Lets assume the code has 16 characters and looks like this:  
`A§$%G_()#Rjy%6/_`  
It's most likely that the user will fail one or more times and get's in a bad mood even before using your software.  
It's much easier to enter the string in 4 chunks of 4 characters:  
`A§$%` - `G_()` - `#Rjy` - `%6/_`

The `licensecode_input` control helps you with this. You define how many chunks you need and how many characters each chunk contains and
the control create the number of inner controls with a corresponding maxlength property.  
In the end you (as a developer) ask the control for the value and get the data of the chunks as the lengthly string you need. 

_Of course there is the `sap.m.MaskInput` which does something similar. But that control always needs a placeholder character which than can't
be part of the license code. In my customer application I needn't a control without this restriction. Btw. my control is a bit more responsive 
cause it wraps the inner controls into new lines if there is not enough space_

## Demo

You can check out a live demo here:

<https://htammen.github.io/openui5-licensecode_input/demo/webapp/index.html>

![Demo Screenshot](./openui5-licensecode_input.png)

## Project Structure

* demo - Library's live demo
* dist - Distribution folder which contains the library ready to use
* src  - Development folder
* test - Testing framework for the library

## Getting started

### Installation

Install openui5-licensecode_input as an npm module

```sh
$ npm install openui5-licensecode_input
```

### Configure manifest.json

Add the library to *sap.ui5/dependencies/libs* and set its path in *sap.ui5/resourceRoots* in your manifest.json file, as follows:

```json
{
  "sap.ui5": {
    "dependencies": {
      "libs": {
        "openui5.licensecode_input": {}
      }
    },
    "resourceRoots": {
      "openui5.licensecode_input": "./FOLDER_WHERE_YOU_PLACED_THE_LIBRARY/openui5/licensecode_input/"
    }
  }
}
```

### How to use

Add openui5-licensecode to your UI5 view:

```xml
<mvc:View controllerName="htammen.demo.openui5.licensecode_input.controller.App" displayBlock="true"
          xmlns:mvc="sap.ui.core.mvc" xmlns:core="sap.ui.core" xmlns="sap.m"
          xmlns:license="openui5.licensecode_input">
    <Shell>
        <App>
            <Page title="{i18n>TITLE}">
                <content>
                    <VBox class="sapUiMediumMargin">
                        <FormattedText htmlText="{i18n>demo.description}"/>
                        <Label text="Enter a license code with 4 controls. Each control contains 4 chars. So in sum the license code is 16 chars long" class="sapUiLargeMarginTop"/>
                        <HBox alignItems="Center" alignContent="SpaceBetween">
                            <license:LicenseCode id="licenseCode0" 
                                value="{path: '/licenseCode0'}" 
                                valueStateText="Enter a license code with 16 characters">
                            </license:LicenseCode>
                            <Label text="LicenseCode Value:" vAlign="Bottom" class="sapUiResponsiveMargin"/>
                            <Text text="{path: '/licenseCode0'}" class="sapUiTinyMarginBeginEnd"/>
                        </HBox>
                    </VBox>
                </content>
                <footer>
                    <Toolbar>
                        <Button id="btMessagePopover" icon="sap-icon://message-popup" type="Reject"
                                visible="false" press="onMessagePopoverPress"/>
                        <ToolbarSpacer/>
                        <Button icon="sap-icon://save" text="Save" press="onSave" />
                    </Toolbar>
                </footer>
            </Page>
        </App>
    </Shell>
</mvc:View>

```

## Control Parameters

| Name | Type | Default| Description
| :---- | :------------------- | :---- | :---------  |
| value | string | null | Value of the control.
| valueState | sap.ui.core.ValueState | None | valueState of the controla
| valueStateText | string | null | Text to display under the control if validation of value failed
| controlCount | int | 4 | Number of inner controls (input fields) to display and use for this control
| singleControlLength | int | 4 | Length of each inner control (input field). Means: how many characters are allowed in each input field 

## Run demo locally

To run the demo application locally after you have cloned the repo to your local computer you should
- `npm install`
- `npm run build`
- `npm run demo`

## Author

Helmut Tammen

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
