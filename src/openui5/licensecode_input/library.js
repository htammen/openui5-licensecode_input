/* !
 * ${copyright}
 */

sap.ui.define([], function() {
  'use strict';

  /**
   * OpenUI5 library: openui5.licensecode_input.
   *
   * @namespace
   * @name openui5.licensecode_input
   * @author Helmut Tammen
   * @version ${version}
   * @public
   */
  return sap.ui.getCore().initLibrary({
    name: 'openui5.licensecode_input',
    dependencies: [
      'sap.ui.core'
    ],
    controls: ['openui5.licensecode.licensecodeInput'],
    noLibraryCSS: true,
    version: '${version}'
  });
});
