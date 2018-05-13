// required core module
import Foundation from './core';

// required dependencies
import './smoothScroll';

// module itself
import { Magellan } from 'foundation-sites/js/foundation.magellan';

Foundation.plugin(Magellan, 'Magellan');

export { Magellan }