import React from 'react';
import { Link } from 'react-router-dom';
import AddSighting from './AddSighting';
import { createContainer } from 'meteor/react-meteor-data';
import {Birds} from '../api/birds';
import {Tracker} from 'meteor/tracker';

export  default class BirdSighting extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        birds:[]
      };

    }

    //on mount we get the data and set it to the state in order to manipulate it
    componentDidMount() {
      // console.log("ComponentDidMount fires AllPost");
      this.postTracker =  Tracker.autorun(() => {
        Meteor.subscribe('allBirdSightings');
          //find all links which are approved. then call fetch on cursor to get all link documents back
          const allBirds = Birds.find({}).fetch()
          this.setState({birds:allBirds});
      });

    }

    onSortByDesc(){
      //sort must get 2 arguments, first is what we are finding, then the sort params
      const allBirds = Birds.find({}, {sort:{number:-1}}).fetch();
      this.setState({birds:allBirds});

    }

    onSortByAsec(){
      const allBirds = Birds.find({}, {sort:{number:1}}).fetch();
      this.setState({birds:allBirds});

    }

    handleSearch(e){
        e.preventDefault();
        const name = e.target.value.trim();
        console.log(name);

        if (name!=""){
            // console.log("NAME TO SEARCH", name);
            const allPost = Birds.find({ name: { '$regex' : name, '$options' : 'i' } }).fetch();
            // console.log("SEARCH TERM", allPost);
            this.setState({birds:allPost});
        }
        else{
          const allPost = Birds.find({}).fetch();
          this.setState({birds:allPost});

        }


    }

    //displays all bird sightings
    renderBirdSightings(){
            return this.state.birds.map((sighting)=>{
                    return<div>
                              <p key={sighting._id}>  {sighting.name} seen  {sighting.number} times </p>
                          </div>
              })
    }

    render() {
        return <div>
              <input className = ' search-form form-control form-control-lg ' type="text" placeholder="SEARCH" onChange={this.handleSearch.bind(this)}/><br/>
          <button className=" sort_button " onClick={this.onSortByDesc.bind(this)}>Sort by least common sightings</button>
          <button className=" sort_button " onClick={this.onSortByAsec.bind(this)}>Sort by most common sightings</button>
            {this.renderBirdSightings()}
              </div>
    }

}//end class


// export default createContainer(() => {
//     Meteor.subscribe('allBirdSightings');
//     return {
//       sightingsArray:Birds.find({}).fetch()
//     };
//
// },BirdSighting);
