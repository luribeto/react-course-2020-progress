import React from 'react';

const SECRET_TO_LIFE = 40;

class ShareSecretToLife extends React.Component {
  render() {
    return (
      <div>
        {this.props.render({ secretToLife: SECRET_TO_LIFE })}
      </div>
    );
  }
}

const ShareSecretWithWorld = () => (
  <ShareSecretToLife
    render={({ secretToLife }) => (
      <h1>
        <b>{secretToLife}</b>
      </h1>
    )}
  />
);
