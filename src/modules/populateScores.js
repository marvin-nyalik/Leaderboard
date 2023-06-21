import { scoreList } from './scoreObject.js';
import { getGameScores } from './gameAPI.js';

const populateScores = async () => {
  const allResponses = await getGameScores();
  scoreList.innerHTML = '';
  allResponses.forEach((scr) => {
    const listItem = `
        <li class="list-item"> 
          <span class="user-name"> ${scr.user}</span>
          <span class="user-score"> ${scr.score} </span>
        </li>
        `;
    scoreList.innerHTML += listItem;
  });
};

export default populateScores;
