// required core module
import Foundation from './core';

// required dependencies
import './util/keyboard';
import './util/box';
import './util/triggers';

// module itself
import { Dropdown } from 'foundation-sites/js/foundation.dropdown';

Foundation.plugin(Dropdown, 'Dropdown');

export { Dropdown };