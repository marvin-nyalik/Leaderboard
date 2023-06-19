import { scoreList, allScores as all } from './scoreObject.js';

const populateScores = () => {
  scoreList.innerHTML = '';
  all.forEach((scr) => {
    const listItem = `
        <li> ${scr.name}: ${scr.score}</li>
        `;
    scoreList.innerHTML += listItem;
  });
};

export default populateScores;
