// required core module
import Foundation from './core';

// required dependencies
import './util/motion';
import './util/triggers';
import './util/keyboard';
import './util/touch';

// module itself
import { Slider } from 'foundation-sites/js/foundation.slider';

Foundation.plugin(Slider, 'Slider');

export { Slider };