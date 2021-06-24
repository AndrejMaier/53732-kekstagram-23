import {generatePhotos} from './moki/data.js';
import {renderPictures} from './moki/render-picture.js';

const COUNT_PHOTO = 25;

// eslint-disable-next-line no-console
renderPictures(generatePhotos(COUNT_PHOTO));
