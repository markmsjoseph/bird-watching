import React from 'react';
export default class PrivateHeader extends React.Component {



  render() {
    return (
      <div >

        <h1 className = "header-title text-center"> {this.props.title}</h1>
        <h3 className = "subtitle-bar text-center"> {this.props.subtitle}</h3>

      </div>
    );
  }


  }
