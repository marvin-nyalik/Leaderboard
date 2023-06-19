import './style.css';
import populateScores from './modules/populateScores.js';
import { submitScore } from './modules/domElements.js';

submitScore.addEventListener('click', populateScores);