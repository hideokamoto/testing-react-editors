import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import './utils';
import { data, editPost } from '@frontkom/gutenberg-js';

// Gutenberg JS Style
import '@frontkom/gutenberg-js/build/css/block-library/style.css';
import '@frontkom/gutenberg-js/build/css/components/style.css';
import '@frontkom/gutenberg-js/build/css/nux/style.css';
import '@frontkom/gutenberg-js/build/css/editor/style.css';
import '@frontkom/gutenberg-js/build/css/block-library/theme.css';
import '@frontkom/gutenberg-js/build/css/block-library/edit-blocks.css';
import '@frontkom/gutenberg-js/build/css/style.css';

class Editor extends Component {
  componentDidMount () {
    const settings = {
      alignWide: true,
      availableTemplates: [],
      allowedBlockTypes: true,
      disableCustomColors: false,
      disablePostFormats: false,
      titlePlaceholder: 'Add title',
      bodyPlaceholder: 'Insert your custom block',
      isRTL: false,
      autosaveInterval: 0,
      canPublish: false,
      canSave: false,
      canAutosave: false,
      mediaLibrary: true,
    };

    // reset localStorage
    localStorage.removeItem('g-editor-page');

    // Disable tips
    data.dispatch('core/nux').disableTips();

    // Initialize the editor
    editPost.initializeEditor('editor', 'page', 1, settings, {});
  }
  render() {
    return (
      <div id="editor" className="gutenberg__editor"></div>
    );
  }
}

class Preview extends Component {
  state = {
    rendered: ''
  }
  componentDidMount() {
    const page = JSON.parse(localStorage.getItem('g-editor-page'));
    if (page) {
      this.setState({
        rendered: page.content ? page.content.rendered : '',
      });
    }
  }
  render () {
    const { rendered } = this.state;
    return rendered ? <div dangerouslySetInnerHTML={{__html: rendered}}/> : <center><em>Add your custom block in the editor</em></center>;
  }
}

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Editor } />
      <Route exact path="/preview" component={ Preview } />
    </Switch>
  </BrowserRouter>
)

export default App;
