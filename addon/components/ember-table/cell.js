import Ember from 'ember';
import layout from '../templates/components/ember-table\cell';
import TableFinderMixin from 'ember-table/mixins/ember-table-finder';
import StyleBindingsMixin from 'ember-table/mixins/style-bindings';

export default Ember.Component.extend(TableFinderMixin,
                                      StyleBindingsMixin, {
  tagName: 'span',
  classNames: ['cell', 'ember-table-content'],
  classNameBindings: 'column.textAlign',
  styleBindings: 'width',
  layout: layout,

	row: null,
	column: null,
	width: Ember.computed.alias('column.width'),

	parentComponent: Ember.computed.alias('row'),

  init: function() {
    this._super();
    this.contentPathDidChange();
    this.contentDidChange();
  },

  contentDidChange: function() {
    this.notifyPropertyChange('cellContent');
  },

  contentPathWillChange: Ember.beforeObserver(function() {
    var contentPath = this.get('column.contentPath');
    if (contentPath) {
      this.removeObserver("row." + contentPath, this,
          this.contentDidChange);
    }
  }, 'column.contentPath'),

  contentPathDidChange: Ember.beforeObserver(function() {
    var contentPath = this.get('column.contentPath');
    if (contentPath) {
      this.addObserver("row." + contentPath, this,
          this.contentDidChange);
    }
  }, 'column.contentPath'),

  cellContent: Ember.computed(function(key, value) {
    var row = this.get('row');
    var column = this.get('column');
    if (!row || !column) {
      return;
    }
    if (arguments.length === 1) {
      value = column.getCellContent(row);
    } else {
      column.setCellContent(row, value);
    }
    return value;
  }).property('row.isLoaded', 'column')
});
