import Ember from 'ember';
import EmberTableFinderMixin from '../../../mixins/ember-table-finder';
import { module, test } from 'qunit';

module('Unit | Mixin | ember table finder');

// Replace this with your real tests.
test('it works', function(assert) {
  var EmberTableFinderObject = Ember.Object.extend(EmberTableFinderMixin);
  var subject = EmberTableFinderObject.create();
  assert.ok(subject);
});
