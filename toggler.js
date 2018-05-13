// required core module
import Foundation from './core';

// required dependencies
import './util/motion';
import './util/triggers';

// module itself
import { Toggler } from 'foundation-sites/js/foundation.toggler';

Foundation.plugin(Toggler, 'Toggler');

export { Toggler };