import Ember from 'ember';

export default Ember.Component.extend({
  updateRentalForm: false,
  actions: {
    update(question, params) {
      this.sendAction('update', question, params);
    },
    delete(question) {
      if(confirm("Are you sure you want to delete this?")) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
