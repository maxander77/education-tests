import getHealthStatus from "../health";
import sortHeroesByHealth from "../health";

test('should return "healthy" if health is more than 50', () => {
  const character = { name: 'Mage', health: 90 };
  expect(getHealthStatus(character)).toBe('healthy');
});

test('should return "healthy" if health is between 15 and 50', () => {
  const character = { name: 'Warrior', health: 30 };
  expect(getHealthStatus(character)).toBe('wounded');
});

test('should return "healthy" if health is less than 15', () => {
  const character = { name: 'Rogue', health: 10 };
  expect(getHealthStatus(character)).toBe('critical');
})

test('should sort heroes by health in descending order', () => {
  const heroes = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];

  const sortedHeroes = sortHeroesByHealth(heroes);


  const expectedSortedHeroes = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(sortedHeroes).toEqual(expectedSortedHeroes);
});