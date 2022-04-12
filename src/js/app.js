import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then(
  (saving) => {
    console.log(saving);
    // saving объект класса GameSaving
  },
  (error) => {
    console.log(error);
    // ...
  },
);
