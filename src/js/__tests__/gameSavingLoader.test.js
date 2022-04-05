import GameSaving from "../GameSaving";
import GameSavingLoader from "../GameSavingLoader";

const data = `{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}`;

test("create new GameSaving", () => {
  const response = new GameSaving(JSON.parse(data));
  const result = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: "Hitman",
      level: 10,
      points: 2000,
    },
  };
  expect(response).toEqual(result);
});

test("load() возвращает корректные данные", async () => {
  const result = JSON.parse(data);

  GameSavingLoader.load().then((saving) => {
    expect(saving).toEqual(result);
  });
});
