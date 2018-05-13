// required core module
import Foundation from './core';

// required dependencies
import './util/keyboard';

// module itself
import { Accordion } from 'foundation-sites/js/foundation.accordion';

Foundation.plugin(Accordion, 'Accordion');

export { Accordion };