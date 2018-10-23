import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FroalaEditor from 'react-froala-wysiwyg';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';

// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';
 
// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import 'font-awesome/css/font-awesome.css';
 
import $ from 'jquery';
window.$ = $;
window.jQuery = $;

class App extends Component {
  state = {
    content: "<p>This is the initial content of the editor</p>"
  }
  handleEditorChange = (model) => {
    this.setState({
      content: model
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div style={{width: '800px',margin: 'auto'}}>
          <FroalaEditor
            model={this.state.content}
            onModelChange={this.handleEditorChange}
            />
          <FroalaEditorView
            model={this.state.content}
          />
          </div>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
