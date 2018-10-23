(function () {
var code = (function () {
  'use strict';

  var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var global$1 = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

  var getMinWidth = function (editor) {
    return editor.getParam('code_dialog_width', 600);
  };
  var getMinHeight = function (editor) {
    return editor.getParam('code_dialog_height', Math.min(global$1.DOM.getViewPort().h - 200, 500));
  };
  var $_a5n0zca2jnlf41mg = {
    getMinWidth: getMinWidth,
    getMinHeight: getMinHeight
  };

  var setContent = function (editor, html) {
    editor.focus();
    editor.undoManager.transact(function () {
      editor.setContent(html);
    });
    editor.selection.setCursorLocation();
    editor.nodeChanged();
  };
  var getContent = function (editor) {
    return editor.getContent({ source_view: true });
  };
  var $_9h153za4jnlf41mi = {
    setContent: setContent,
    getContent: getContent
  };

  var open = function (editor) {
    var minWidth = $_a5n0zca2jnlf41mg.getMinWidth(editor);
    var minHeight = $_a5n0zca2jnlf41mg.getMinHeight(editor);
    var win = editor.windowManager.open({
      title: 'Source code',
      body: {
        type: 'textbox',
        name: 'code',
        multiline: true,
        minWidth: minWidth,
        minHeight: minHeight,
        spellcheck: false,
        style: 'direction: ltr; text-align: left'
      },
      onSubmit: function (e) {
        $_9h153za4jnlf41mi.setContent(editor, e.data.code);
      }
    });
    win.find('#code').value($_9h153za4jnlf41mi.getContent(editor));
  };
  var $_7ntz3za1jnlf41mf = { open: open };

  var register = function (editor) {
    editor.addCommand('mceCodeEditor', function () {
      $_7ntz3za1jnlf41mf.open(editor);
    });
  };
  var $_f5n1u5a0jnlf41me = { register: register };

  var register$1 = function (editor) {
    editor.addButton('code', {
      icon: 'code',
      tooltip: 'Source code',
      onclick: function () {
        $_7ntz3za1jnlf41mf.open(editor);
      }
    });
    editor.addMenuItem('code', {
      icon: 'code',
      text: 'Source code',
      onclick: function () {
        $_7ntz3za1jnlf41mf.open(editor);
      }
    });
  };
  var $_96cxqua5jnlf41mj = { register: register$1 };

  global.add('code', function (editor) {
    $_f5n1u5a0jnlf41me.register(editor);
    $_96cxqua5jnlf41mj.register(editor);
    return {};
  });
  function Plugin () {
  }

  return Plugin;

}());
})();
