/* ---------------------------------------------------- +/

## Publications ##

All publications-related code. 

/+ ---------------------------------------------------- */

// Publish all items

Meteor.publish('allSkills', function() {
  return Skills.find({jobs_count: {$gte: 50},
                      people_count: {$gte: 50}});
});

// Publish a single item

Meteor.publish('singleSkill', function(id) {
  return Skills.find(id);
});

Meteor.publish('skillCompanies', function(id) {
  var skillName = Skills.findOne(id).name;
  return Companies.find({'stack': skillName}, {sort: {al_followers: -1},
                                               limit: 12});
});

Meteor.publish('singleCompany', function(id) {
  return Companies.find(id);
});

Meteor.publish('companyStack', function(id) {
  var stack = Companies.findOne(id).stack;
  return Skills.find({'name': {$in: stack}});
});





