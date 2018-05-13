// required core module
import Foundation from './core';

// required dependencies
import './util/triggers';
import './util/mediaQuery';

// module itself
import { Sticky } from 'foundation-sites/js/foundation.sticky';

Foundation.plugin(Sticky, 'Sticky');

export { Sticky };