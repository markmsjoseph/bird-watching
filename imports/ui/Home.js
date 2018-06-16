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
                              <nav className="navbar navbar-expand-md navbar-dark justify-content-center noMargin">
                                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                                        <span className="navbar-toggler-icon"></span>
                                      </button>

                                      <div className="collapse navbar-collapse" id="collapsibleNavbar">
                                                <ul className="navbar-nav">

                                                  <li className="nav-item">
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
