import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Editor } from '@tinymce/tinymce-react';

class App extends Component {
  state = {
    content: "<p>This is the initial content of the editor</p>"
  }
  handleEditorChange = (e) => {
    this.setState({
      content: e.target.getContent()
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div dangerouslySetInnerHTML={{__html: this.state.content}} />
            <Editor
              initialValue="<p>This is the initial content of the editor</p>"
              init={{
                plugins: 'link image code',
                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
              }}
              onChange={this.handleEditorChange}
            />
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
