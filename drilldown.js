// required core module
import Foundation from './core';

// required dependencies
import './util/keyboard';
import './util/box';
import './util/nest';

// module itself
import { Drilldown } from 'foundation-sites/js/foundation.drilldown';

Foundation.plugin(Drilldown, 'Drilldown');

export { Drilldown };