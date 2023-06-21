import { scoreList } from './scoreObject.js';
import { getGameScores } from './gameAPI.js';

const populateScores = async () => {
  const allResponses = await getGameScores();
  scoreList.innerHTML = '';
  allResponses.forEach((scr, index) => {
    const listItem = `
        <li class="list-item"> 
          <span class="user-name" id="user-${index}">
          ${index + 1}. 
          ${index === 0 ? scr.user.toUpperCase() : scr.user} 
          ${index === 0 ? `<i class='bx bxs-crown'></i>` : 
          index === 1 ? `<i class='bx bxs-star'></i>` : 
          index ===2 ? `<i class='bx bx-star'></i>`:
          ``}
          </span>
          <span class="user-score"> ${scr.score} </span>
        </li>
        `;
    scoreList.innerHTML += listItem;
  });
};

export default populateScores;
