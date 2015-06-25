import Ember from 'ember';
import TableBlock from '../components/xtable-block';

export default TableBlock.extend({
  init:function(){
    console.log(
      'columns', this.get('columns'),
      'width', this.get('width'),
      'height', this.get('height'),
      'scrollLeft', this.get('scrollLeft'));
  },
  classNames: ['ember-table-header-block'],
  // TODO(new-api): Eliminate view alias
  itemView: 'header-row',
  itemComponent: 'xheader-row',
  itemViewClass: Ember.computed.alias('itemView'),

  content: Ember.computed(function() {
    return [this.get('columns')];
  }).property('columns')
});
