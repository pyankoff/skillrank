/* ---------------------------------------------------- +/

## Client Router ##

Client-side Router.

/+ ---------------------------------------------------- */

// Config

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

// Routes

Router.map(function() {

  // Skills

  this.route('skills', {
    waitOn: function () {
      return Meteor.subscribe('allSkills');
    },
    data: function () {
      return Skills.find();
    }
  });

  this.route('skill', {
    path: '/skills/:_id',
    waitOn: function () {
      return [Meteor.subscribe('singleSkill', this.params._id),
              Meteor.subscribe('skillCompanies', this.params._id)];
    },
    data: function () {
      return Skills.findOne(this.params._id); 
    }
  });


  this.route('company', {
    path: '/companies/:_id',
    waitOn: function () {
      return [Meteor.subscribe('singleCompany', this.params._id),
              Meteor.subscribe('companyStack', this.params._id)];
    },
    data: function () {
      return {
        company: Companies.findOne(this.params._id),
        stack: Skills.find().fetch()
      }; 
    }
  });

  // Pages

  this.route('home', {
    path: '/'
  });

  // Users

  this.route('login');

  this.route('signup');

  this.route('forgot');

});
