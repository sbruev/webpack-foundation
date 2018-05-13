// required core module
import Foundation from './core';

// required dependencies
import './util/keyboard';
import './util/triggers';
import './util/mediaQuery';
import './util/motion';

// module itself
import { Reveal } from 'foundation-sites/js/foundation.reveal';

Foundation.plugin(Reveal, 'Reveal');

export { Reveal };