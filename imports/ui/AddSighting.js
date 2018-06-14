import React from 'react';
import { Link } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';
import PrivateHeader from './PrivateHeader';
import {Birds} from '../api/birds';


export class AddSighting extends React.Component {

    constructor(props) {
      super(props);
      this.state={
       error:''

      }
    }

    removeSightings(id){
          this.props.meteorCall('birds.remove',id);
        console.log("remove sighting clicked");
    }

    increaseNumber(id){
        this.props.meteorCall('birds.increaseCount',id);
        console.log("increaseNumber sighting clicked");
    }





    //add new bird sighting
    addSighting(e){
        e.preventDefault();
        this.setState({error:''});
        //get valuees from form
        let name = this.refs.birdName.value.trim().toLowerCase();
        let number = Number(this.refs.birdNumber.value);

        console.log("Name", name, "number",number);
        if(name != 0 && number != 0){
          //insert into database
          this.props.meteorCall('birds.insert',[name, number]);
        }
        else if(name == 0){
            this.setState({error:'Must enter bird name'});
        }else if(number == 0){
          this.setState({error:'Must enter bird number'});
        }
        else{
            this.setState({error:'Must enter bird name and number'});
        }


        //clear input values
        this.refs.birdName.value = '';
        this.refs.birdNumber.value = '';

    }


    renderBirdSightings(){
            return this.props.sightingsArray.map((sighting)=>{
                    return<div className="list-group-item item-list">
                              <p  key={sighting._id}>  {sighting.name} seen  {sighting.number} times </p>
                              <div>
                                    <button className='btn-default button-comment margins'  onClick={this.removeSightings.bind(this, sighting._id)}>Remove From List </button>
                                    <button className='btn-default button-comment margins'   onClick={this.increaseNumber.bind(this, sighting._id)}>Increase Number</button>
                              </div>
                          </div>
              })
    }


    render() {
        return <div>
                      <div className = "container-fluid header">
                          <div className = "jumborton">
                                <PrivateHeader  title="Add Sighting"  />
                          </div>
                          <nav class="navbar navbar-expand-md navbar-dark justify-content-center noMargin">
                                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                                    <span class="navbar-toggler-icon"></span>
                                  </button>

                                  <div class="collapse navbar-collapse" id="collapsibleNavbar">
                                            <ul class="navbar-nav">

                                              <li class="nav-item">
                                                <Link to ="/">Home</Link>
                                              </li>
                                            </ul>
                                  </div>
                        </nav>

                      </div>

                      <div>

                          {this.renderBirdSightings()}
                      </div>

                      <div className="row justify-content-center mr-0">
                         <div class="col-lg-4 col-md-4 col-sm-4 col-sm-12 ">
                                <form onSubmit={this.addSighting.bind(this)}>

                                      <input className = "margins form-control" ref="birdName" placeholder="Enter birdname"></input>

                                      <input className = "margins form-control" ref="birdNumber" type="number" min="1"></input>

                                      <p>{this.state.error != '' ? this.state.error: ''}</p>
                                      <button className='sort_button button-comment'  >Add New Sighting </button>



                                </form>
                          </div>
                        </div>


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
