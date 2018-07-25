import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/dot';
import 'brace/theme/github';

class TextEditor extends React.Component {

  handleChange = (value, event) => {
    this.props.onTextChange(value);
  };

  render() {
    return (
      <div>
        <AceEditor
          mode="dot"
          theme="github"
          onChange={this.handleChange}
          name="UNIQUE_ID_OF_DIV"
          value={this.props.dotSrc}
          // viewport height - app bar - 2 * padding
          height="calc(100vh - 64px - 2 * 12px)"
          // half viewport width - 2 * padding
          width="calc(50vw - 2 * 12px)"
          wrapEnabled
          showPrintMargin={false}
          editorProps={{
            $blockScrolling: true
          }}
        />
      </div>
    );
  }
}

export default TextEditor;
