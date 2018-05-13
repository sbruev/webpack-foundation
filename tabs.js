// required core module
import Foundation from './core';

// required dependencies
import './util/keyboard';
import './util/imageLoader';

// module itself
import { Tabs } from 'foundation-sites/js/foundation.tabs';

Foundation.plugin(Tabs, 'Tabs');

export { Tabs };