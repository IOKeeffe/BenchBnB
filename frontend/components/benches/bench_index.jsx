import React from 'react';

class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.displayBenches = this.displayBenches.bind(this);
  }

  componentDidMount() {
    this.props.fetchBenches();
  }

  renderLoading() {
  }

  displayBenches() {
  }

  render() {
    return (
      <div>
        {this.displayBenches()}
        <h1>hi</h1>
      </div>
    )
  }

}

export default BenchIndex;
