import DS from 'ember-data';

export default DS.Model.extend({
  answer_content: DS.attr(),
  answer_author: DS.attr(),
  question: DS.belongsTo('question', { async: true }),
});
