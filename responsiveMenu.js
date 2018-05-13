// required core module
import Foundation from './core';

// required dependencies
import './util/triggers';
import './util/mediaQuery';

// module itself
import { ResponsiveMenu } from 'foundation-sites/js/foundation.responsiveMenu';

Foundation.plugin(ResponsiveMenu, 'ResponsiveMenu');

export { ResponsiveMenu };