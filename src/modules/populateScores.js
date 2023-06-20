import { scoreList } from './scoreObject.js';
import { getGameScores } from './gameAPI.js';

const populateScores = async () => {
  const allResponses = await getGameScores();
  scoreList.innerHTML = '';
  allResponses.forEach((scr) => {
    const listItem = `
        <li> ${scr.user}: ${scr.score}</li>
        `;
    scoreList.innerHTML += listItem;
  });
};

export default populateScores;
