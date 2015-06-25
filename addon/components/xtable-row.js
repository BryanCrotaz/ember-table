import Ember from 'ember';
import RegisterTableComponentMixin from 'ember-table/mixins/register-table-component';
import LazyItemView from 'ember-table/components/lazy-item';

export default LazyItemView.extend(
  RegisterTableComponentMixin, {
    classNames: 'ember-table-table-row',
    classNameBindings: ['row.isHovered:ember-table-hover',
      'row.isSelected:ember-table-selected',
      'row.rowStyle',
      'isLastRow:ember-table-last-row'],
    styleBindings: ['width', 'height'],
    row: Ember.computed.alias('content'),
    columns: Ember.computed.alias('parentView.columns'),
    width: Ember.computed.alias('tableComponent._rowWidth'),
    height: Ember.computed.alias('tableComponent.rowHeight'),

    isLastRow: Ember.computed(function() {
      return this.get('row') ===
        this.get('tableComponent.bodyContent.lastObject');
    }).property('tableComponent.bodyContent.lastObject', 'row'),


    _tableColumnsWidth: Ember.computed(function(){
      //TODO: make sure this is the right way of getting things from the controller
      return this.get('controller._tableColumnsWidth') || 100;
    }),


    // TODO(azirbel): Could simplify slightly via
    // this.set('row.isHovered', true) and remove the temp variable.
    // Also applies below/elsewhere.
    mouseEnter: function() {
      var row = this.get('row');
      if (row) {
        row.set('isHovered', true);
      }
    },

    mouseLeave: function() {
      var row = this.get('row');
      if (row) {
        row.set('isHovered', false);
      }
    },

    teardownContent: function() {
      var row = this.get('row');
      if (row) {
        row.set('isHovered', false);
      }
    }
  });
