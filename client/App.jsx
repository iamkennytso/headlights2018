import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mess: 'Hello World'
    };
  }
  render() {
    return (
      <div id="mainDiv">
        {this.state.mess}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
