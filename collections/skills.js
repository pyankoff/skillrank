/* ---------------------------------------------------- +/

## Skills ##

All code related to the Skills collection goes here. 

/+ ---------------------------------------------------- */

Skills = new Meteor.Collection('skills');

// // Allow/Deny

// Skills.allow({
//   insert: function(userId, doc){
//     return can.createItem(userId);
//   },
//   update:  function(userId, doc, fieldNames, modifier){
//     return can.editItem(userId, doc);
//   },
//   remove:  function(userId, doc){
//     return can.removeItem(userId, doc);
//   }
// });

// // Methods

// Meteor.methods({
//   createItem: function(item){
//     if(can.createItem(Meteor.user()))
//       Skills.insert(item);
//   },
//   removeItem: function(item){
//     if(can.removeItem(Meteor.user(), item)){
//       Skills.remove(item._id);
//     }else{
//       throw new Meteor.Error(403, 'You do not have the rights to delete this item.')
//     }
//   }
// });
