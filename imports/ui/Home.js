import React from 'react';
import { Link } from 'react-router-dom';
import PrivateHeader from './PrivateHeader';
import { createContainer } from 'meteor/react-meteor-data';
import {Session} from 'meteor/session';

export class Home extends React.Component {

      constructor(props) {
        super(props);
      }

      componentWillMount() {
          //set the global session variable currentPagePrivacy to the value that was passed in as props from the route component in main.js
          Session.set('currentPagePrivacy', this.props.priavteOrPublic);//set session id
      }

      render() {
          return (
                  <div>
                      <div className = "container-fluid header">
                            <div className = "jumborton">
                                <p className = "header-loggedInAs text-right">Logged in as:{this.props.username} </p>
                                  <PrivateHeader  title="Bare Bones App"  />

                            </div>
                        </div>
                  </div>
          );
      }

}


export default createContainer(() => {
    return {
      username:Meteor.user() != undefined ? Meteor.user().username : 'undefined'
    };
}, Home);
