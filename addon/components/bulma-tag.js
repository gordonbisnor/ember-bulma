import Ember from 'ember';
import layout from '../templates/components/bulma-tag';
import { _colorBindings, _responsiveHelpers } from '../constants';

export default Ember.Component.extend({
  layout,
  tagName: 'span',
  classNames: ['tag'],
  classNameBindings: [].concat(_colorBindings, _responsiveHelpers),

  /**
    Explicitly define remove to override the internal method

    @method remove
    @public
  */
  remove: null,

  /**
    Compute that a tag can be deleted when a remove action is passed

    @property _canDelete
    @returns Boolean
    @private
  */
  @computed('remove')
  _canDelete(remove) {
    return !!remove;
  },
  actions: {
    /**
      Handle remove, return instance of component for mutablity

      @method close
      @returns Component
      @public
    */
    remove() {
      this.sendAction('remove', this.get('tag'), this);
    }
  }
});
