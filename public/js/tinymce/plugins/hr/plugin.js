(function () {
var hr = (function () {
  'use strict';

  var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var register = function (editor) {
    editor.addCommand('InsertHorizontalRule', function () {
      editor.execCommand('mceInsertContent', false, '<hr />');
    });
  };
  var $_4a7so3cnjnlf41xo = { register: register };

  var register$1 = function (editor) {
    editor.addButton('hr', {
      icon: 'hr',
      tooltip: 'Horizontal line',
      cmd: 'InsertHorizontalRule'
    });
    editor.addMenuItem('hr', {
      icon: 'hr',
      text: 'Horizontal line',
      cmd: 'InsertHorizontalRule',
      context: 'insert'
    });
  };
  var $_1m6o31cojnlf41xo = { register: register$1 };

  global.add('hr', function (editor) {
    $_4a7so3cnjnlf41xo.register(editor);
    $_1m6o31cojnlf41xo.register(editor);
  });
  function Plugin () {
  }

  return Plugin;

}());
})();
