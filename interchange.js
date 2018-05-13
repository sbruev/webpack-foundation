// required core module
import Foundation from './core';

// required dependencies
import './util/mediaQuery';

// module itself
import { Interchange } from 'foundation-sites/js/foundation.interchange';

Foundation.plugin(Interchange, 'Interchange');

export { Interchange };