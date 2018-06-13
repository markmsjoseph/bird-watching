import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';


export const Birds = new Mongo.Collection('birds');

if(Meteor.isServer){
  //meteor publish only runs on server not both client and server
  //publish takes a string and a function determining what data each client should have access too
  //must use es5 function because we need this binding
  Meteor.publish('allBirdSightings', function(){
    //we get the user id because of the this binding from es5 functions, the user calling this publication will have that id
    return Birds.find({});
  });
}

Meteor.methods({
      'birds.insert'(array){
        //if there is no user, you cannot insert a note

        console.log("INSERTING BIRD");
        //notes.insert gives the  reutn value of id.
        return Birds.insert({
            name:'Keskidee',
            number:5
        })
      }

      //
      // 'birds.update'(_id, updates) {
      //   if (!this.userId) {
      //     throw new Meteor.Error('not-authorized');
      //   }
      //     Birds.update({
      //     _id,
      //     userId: this.userId
      //   }, {
      //     $set: {
      //       updatedAt: moment().valueOf(),
      //       ...updates
      //     }
      //
      //   });
      // }
    });
