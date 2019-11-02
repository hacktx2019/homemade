import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: 0
    };
  }

  render() {
    return (
      <div>
        <button onClick={() => a}>TRY</button>
      </div>
    )
  }
}

export default App;