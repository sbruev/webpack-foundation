// required core module
import Foundation from './core';

// required dependencies
import './util/motion';
import './accordion';
import './tabs';

// module itself
import { ResponsiveAccordionTabs } from 'foundation-sites/js/foundation.responsiveAccordionTabs';

Foundation.plugin(ResponsiveAccordionTabs, 'ResponsiveAccordionTabs');

export { ResponsiveAccordionTabs };