import React from 'react';

class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.loading);
  }

  componentDidMount() {
    this.props.fetchBenches();
    console.log(this.props.loading);
  }

  renderLoading() {
    // if(this.props.loading)
  }

  render() {
    return (
      <div>
        {this.renderLoading}
        <h1>hi</h1>
      </div>
    )
  }

}

export default BenchIndex;
