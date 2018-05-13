// required core module
import Foundation from './core';

// required dependencies
import './util/mediaQuery';
import './util/imageLoader';

// module itself
import { Equalizer } from 'foundation-sites/js/foundation.equalizer';

Foundation.plugin(Equalizer, 'Equalizer');

export { Equalizer };