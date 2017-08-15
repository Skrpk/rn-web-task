import React from 'react';

import Button from '../Button/Button';

export default class Music extends React.Component {
  render() {
    let keyVar = 0;
    const songsList = this.props.tracksObject.map(songObj =>
      <li key={keyVar++}>{songObj.name}</li>,
    );

    return (<div>
      <ul className="main-page__list">
        {songsList}
      </ul>
      <Button
        listener={this.props.logUserOut}
        className="btn btn-primary main-page__button"
        title="Log Out!"
      />
    </div>);
  }
}
