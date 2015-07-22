import Ember from 'ember';
import layout from '../templates/components/ember-table\row';

export default Ember.Component.extend(TableFinderMixin, {
  layout: layout,
  width: Ember.computed.alias('tableComponent._rowWidth'),
  height: Ember.computed.alias('tableComponent.rowHeight'),

});
