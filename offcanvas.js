// required core module
import Foundation from './core';

// required dependencies
import './util/keyboard';
import './util/mediaQuery';
import './util/triggers';

// module itself
import { OffCanvas } from 'foundation-sites/js/foundation.offcanvas';

Foundation.plugin(OffCanvas, 'OffCanvas');

export { OffCanvas };