import React from 'react';
import { Link } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';
import PrivateHeader from './PrivateHeader';
import {Birds} from '../api/birds';


export class AddSighting extends React.Component {

    constructor(props) {
      super(props);
      this.state={
       name:'',
       number:0

      }
    }

    removeSightings(){
        console.log("remove sighting clicked");
    }

    increaseNumber(){
        console.log("increaseNumber sighting clicked");
    }

    decreaseNumber(){
        console.log("decreaseNumber sighting clicked");
    }



    //add new bird sighting
    addSighting(e){
        e.preventDefault();
        //get valuees from form
        let name = this.refs.birdName.value.trim().toLowerCase();
        let number = this.refs.birdNumber.value;

        //insert into database
        this.props.meteorCall('birds.insert',[name, number]);

        //clear input values
        this.refs.birdName.value = '';
        this.refs.birdNumber.value = '';

    }


    renderBirdSightings(){
            return this.props.sightingsArray.map((sighting)=>{
                    return<div>
                              <p key={sighting._id}>  {sighting.name} seen  {sighting.number} times </p>
                              <button className='button-comment'  onClick={this.removeSightings.bind(this)}>Remove All Sightings of this bird </button>
                              <button className='button-comment'  onClick={this.increaseNumber.bind(this)}>Increase Number</button>
                              <button className='button-comment'  onClick={this.decreaseNumber.bind(this)}>Decrease Number</button>
                          </div>
              })
    }


    render() {
        return <div>
                      <div className = "container-fluid header">
                          <div className = "jumborton">
                                <PrivateHeader  title="Add Sighting"  />
                          </div>
                      </div>

                      {this.renderBirdSightings()}
                      <form onSubmit={this.addSighting.bind(this)}>
                            <input className = "comment-textbox" ref="birdName" placeholder="Add a comment"></input>
                            <input className = "comment-textbox" ref="birdNumber" type="number" min="1"></input>
                            <button className='button-comment'  >Add New Sighting </button>

                      </form>
              </div>
    }

}



export default createContainer(() => {
    Meteor.subscribe('allBirdSightings');
    return {
      meteorCall: Meteor.call,
      sightingsArray:Birds.find({}).fetch()
    };

},AddSighting);
