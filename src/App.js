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
          <div dangerouslySetInnerHTML={{__html: this.state.content}}/>
          <div style={{width: '800px',margin: 'auto'}}>
            <Editor
              initialValue="<p>This is the initial content of the editor</p>"
              init={{
                plugins: 'link image code',
                language: "en",
                menubar: false,
                toolbar: 'undo redo | bold italic image | alignleft aligncenter alignright | code',
                file_picker_types: 'file image media',
                images_upload_url: 'http://localhost:3000',
                images_upload_handler: function (blobInfo, success, failure) {
                  setTimeout(function() {
                    // no matter what you upload, we will turn it into TinyMCE logo :)
                    success('https://raw.githubusercontent.com/ask-utils/ask-utils/master/docs/img/logo.png');
                  }, 2000);
                },
                
                automatic_uploads: true
              }}
              onChange={this.handleEditorChange}
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
