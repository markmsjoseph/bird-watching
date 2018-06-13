import React from 'react';
import { Link } from 'react-router-dom';
import AddSighting from './AddSighting';
import { createContainer } from 'meteor/react-meteor-data';
import {Birds} from '../api/birds';

export  class BirdSighting extends React.Component {

    constructor(props) {
      super(props);

    }

    renderBirdSightings(){
            return this.props.sightingsArray.map((sighting)=>{
                    return<div>
                              <p key={sighting._id}>  {sighting.name} seen  {sighting.number} times </p>
                          </div>
              })
    }

    render() {
        return <div>
                  {this.renderBirdSightings()}
              </div>
    }

}//end class


export default createContainer(() => {
    Meteor.subscribe('allBirdSightings');
    return {
      sightingsArray:Birds.find({}).fetch()
    };

},BirdSighting);
