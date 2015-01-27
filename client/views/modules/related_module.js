Template.related_module.created = function() {
  Session.set('relatedSelected', '');
}

Template.related_module.helpers({
  fraction: function() {
    var selected = Session.get('relatedSelected');
    if (!selected) {
      if (this.related_skills) {
        selected = this.related_skills[0].name;
        Session.set('relatedSelected', selected);
      };
    };

    selectedSkill = _.find(this.related_skills, function(skill) {
      return skill.name == selected;
    });
    if (selectedSkill) {
      var fraction = selectedSkill.count/this.jobs_count;
      return fraction.toFixed(2);
    }
  },
  relatedSelected: function() {
    var selectedSkill = Session.get('relatedSelected');
    return this.name == selectedSkill ? 'active' : '';
  }
})

Template.related_module.events({
  'click .list-group-item': function() {
    Session.set('relatedSelected', this.name);
  }
});

