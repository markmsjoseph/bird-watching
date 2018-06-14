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
                              <nav class="navbar navbar-expand-md navbar-dark justify-content-center noMargin">
                                      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                                        <span class="navbar-toggler-icon"></span>
                                      </button>

                                      <div class="collapse navbar-collapse" id="collapsibleNavbar">
                                                <ul class="navbar-nav">

                                                  <li class="nav-item">
                                                    <Link to ="/addSighting">Manage Sightings</Link>
                                                  </li>
                                                </ul>
                                      </div>
                            </nav>

                        </div>


                        <BirdSighting />


                  </div>
          );
      }

}


export default createContainer(() => {
    return {

    };
}, Home);
