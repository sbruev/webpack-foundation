// required core module
import Foundation from './core';

// required dependencies
import './util/keyboard';
import './util/motion';
import './util/timer';
import './util/imageLoader';
import './util/touch';

// module itself
import { Orbit } from 'foundation-sites/js/foundation.orbit';

Foundation.plugin(Orbit, 'Orbit');

export { Orbit };