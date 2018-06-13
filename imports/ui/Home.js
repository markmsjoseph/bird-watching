import React from 'react';
import { Link } from 'react-router-dom';
import PrivateHeader from './PrivateHeader';
import BirdSighting from './BirdSighting';
import { createContainer } from 'meteor/react-meteor-data';


export class Home extends React.Component {

      constructor(props) {
        super(props);
      }


      render() {
          return (
                  <div>
                      <div className = "container-fluid header">
                            <div className = "jumborton">
                                  <PrivateHeader  title="Bird Watching App"  />

                            </div>
                        </div>
                        <Link to ="/addSighting">Add Sighting</Link>
                        <BirdSighting />

                  </div>
          );
      }

}


export default createContainer(() => {
    return {

    };
}, Home);
