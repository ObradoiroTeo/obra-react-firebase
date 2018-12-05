import React from "react";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>App</h1>
        {this.props.children}
      </>
    );
  }
}

export default App;
