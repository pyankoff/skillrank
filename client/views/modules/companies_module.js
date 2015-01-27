Template.companies_module.helpers({
  companies: function() {
    return Companies.find().fetch();
  }
});