import Ember from 'ember';

export default Ember.Mixin.create({
	parentComponent: null,
	tableComponent: Ember.computed.alias('parentComponent.tableComponent'),
});
