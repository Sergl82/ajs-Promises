import read from "./reader";
import json from "./parser";
import GameSaving from "./Gamesaving";

export default class GameSavingLoader {
  static load() {
    return read()
      .then((res) => json(res))
      .then((res) => new GameSaving(JSON.parse(res)));
  }
}

/* export default class GameSavingLoader {
  static load() {
    return read()
      .then((response) => {
        console.log(response);
        return JSON.parse(response);
      })
      .then((result) => {
        console.log(new GameSaving(result));
        return new GameSaving(result);
      })
      .catch((err) => {
        throw new Error(err.message);//ошибка c JSON
      });
  }
}
*/
