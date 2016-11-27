import Ember from 'ember';
import layout from '../templates/components/bulma-hero-content';
import { _responsiveHelpers } from '../constants';

export default Ember.Component.extend({
  layout,
  classNames: ['hero-body'],
  classNameBindings: [
    'full:is-fullwidth'
  ].concat(_responsiveHelpers),

  /**

  */
  fluidContainer: false,

  /**
    Signal if container wrapper should be used

    @property useContainer
    @returns Bool
    @public
  */
  useContainer: true,

  /**
    Alias for useContainer

    @property container
    @returns Bool
    @public
  */
  @alias('useContainer') container
});
