import React from 'react';
import { Link } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';


export class AddSighting extends React.Component {

    constructor(props) {
      super(props);
    }
  
    render() {
      console.log("CURRENT PROP ARRAY", this.props.currentSightings);
        return <div>

        </div>
    }
}



export default createContainer((props) => {
    const propValue = props.currentSightings;
    console.log(propValue);
    return {
        currentSightings:props.currentSightings != undefined ? props.currentSightings : undefined
    };
}, AddSighting);


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { withTracker } from 'meteor/react-meteor-data';
//
//
//
// export class AddSighting extends React.Component {
//
//     constructor(props) {
//       super(props);
//     }
//
//
//     render() {
//       console.log("CURRENT PROP ARRAY", this.props.currentSightings);
//         return <div>
//
//         </div>
//     }
//
//
// }
//
//
// export default withTracker((props) => {
//     console.log("PROPS IN WITHTRACKER: ", props.currentSightings);
//
//     return {
//       sightingsArray:!!props ? props.currentSightings : 'nosightings array'
//     };
//
// })(AddSighting);
