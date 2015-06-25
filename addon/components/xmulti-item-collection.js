import Ember from 'ember';
import StyleBindingsMixin from 'ember-table/mixins/style-bindings';

export default Ember.Component.extend(
  StyleBindingsMixin, {
    styleBindings: 'width',
    itemViewClassField: null,
    itemComponent: Ember.computed(function(){
      let componentClass = this.get('itemViewClassField');
      if(componentClass === "headerCellViewClass"){
        return 'xheader-cell';
      }
      if(componentClass === "tableCellViewClass"){
        return 'xtable-cell';
      }
    })

    /*createChildView: function(view, attrs) {
      console.log(view,attrs);
      var itemViewClassField = this.get('itemViewClassField');
      var itemViewClass = attrs.content.get(itemViewClassField);
      if (typeof itemViewClass === 'string') {
        if (/[A-Z]+/.exec(itemViewClass)) {
          // Global var lookup - 'App.MessagePreviewView'
          itemViewClass = Ember.get(Ember.lookup, itemViewClass);
        } else {
          // Ember CLI Style lookup - 'message/preview'
          itemViewClass = this.container.lookupFactory("view:" + itemViewClass);
        }
      }
      return this._super(itemViewClass, attrs);
    }*/
  });
