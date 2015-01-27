/* ---------------------------------------------------- +/

## Items ##

Code related to the items template

/+ ---------------------------------------------------- */

dataTableData = function () {
    return Skills.find().fetch(); 
};

var optionsObject = {
    paging: false,
    info: false,
    autowidth: true,
    columns: [{
        title: 'Skill',
        data: 'name', // note: access nested data like this
        className: 'nameColumn'
    }, 
    {
        title: 'Jobs',
        data: 'jobs_count',
        className: 'jobsColumn'
    },
    {
        title: 'People',
        data: 'people_count',
        className: 'peopleColumn'
    },
    {
        title: 'Jobs/People Ratio',
        data: 'ratio',
        className: 'ratioColumn'
    }]
}

Template.skills.helpers({
  reactiveDataFunction: function() {
    return dataTableData;
  },
  optionsObject: optionsObject
});


Template.skills.created = function () {
  //
};

Template.skills.rendered = function () {
  //
};

Template.skills.events({
  //
});