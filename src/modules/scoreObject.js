import * as dom from './domElements.js';

class Score {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

const allScores = [];

const addBtn = dom.submitScore;
const { scoreList } = dom;

addBtn.addEventListener('click', () => {
  const name = dom.nameInput.value;
  const score = dom.scoreInput.value;

  const isNotANumber = Number.isNaN(score);
  const isGreaterLess = score > 0 || score < 0 || score === 0;
  if (name !== '' && !isNotANumber && isGreaterLess) {
    const newScore = new Score(name, score);
    allScores.push(newScore);
  }
  dom.nameInput.value = '';
  dom.scoreInput.value = '';
});

export { allScores, scoreList };
