import React from 'react';

export default class Button extends React.Component {
  render() {
    return (<button
      onClick={this.props.listener}
      className={this.props.className}
    >
      {this.props.title}
    </button>);
  }
}
