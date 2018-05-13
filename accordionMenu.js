// required core module
import Foundation from './core';

// required dependencies
import './util/keyboard';
import './util/nest';

// module itself
import { AccordionMenu } from 'foundation-sites/js/foundation.accordionMenu';

Foundation.plugin(AccordionMenu, 'AccordionMenu');

export { AccordionMenu };