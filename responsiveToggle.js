// required core module
import Foundation from './core';

// required dependencies
import './util/mediaQuery';
import './util/motion';

// module itself
import { ResponsiveToggle } from 'foundation-sites/js/foundation.responsiveToggle';

Foundation.plugin(ResponsiveToggle, 'ResponsiveToggle');

export { ResponsiveToggle };