function getHealthStatus(character) {
  if (character.health > 50) {
    return 'healthy';
  } else if (character.health >= 15) {
    return 'wounded';
  } else {
    return 'critical';
  }
}

function sortHeroesByHealth(heroes) {
  return heroes.slice().sort((a, b) => b.health - a.health);
}


export default getHealthStatus;


