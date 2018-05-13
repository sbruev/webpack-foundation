// required core module
import Foundation from './core';

// required dependencies
import './util/keyboard';
import './util/box';
import './util/nest';

// module itself
import { DropdownMenu } from 'foundation-sites/js/foundation.dropdownMenu';

Foundation.plugin(DropdownMenu, 'DropdownMenu');

export { DropdownMenu };