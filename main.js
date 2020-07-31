//make dino
const makeDino = function (species, period, carnivore, extinct = false) {
  if (extinct !== false) {
    extinct = true;
  }
  return {
    species: species,
    period: period,
    carnivore: carnivore,
    extinct: extinct,
  };
};

const makeSingular = function(dino){
  let newSpecies = '';
  if ( dino.species.endsWith('us')){
    
    newSpecies = dino.species.slice(0, -2);
  } else {
    newSpecies = dino.species;
  }
  return makeDino(newSpecies, dino.period, dino.carnivore, dino.extinct );
}


/********************
 * HELPER FUNCTIONS *
 ********************/
const isCarnivore = function(dino){
  return dino.carnivore;
}

const isExtinct = function(dino){
  return dino.extinct;
}

const isTriassic = function(dino){
  return dino.period === 'Triassic';
}

const isJurassic = function(dino){
  return dino.period === 'Jurassic';
}

const isCretaceous = function(dino){
  return dino.period === 'Cretaceous'
}
/***********************
 * ITERATION FUNCTIONS *
 **********************/

 //truncateSpecies
const truncateSpecies = function(dino){
  let newSpecies = '';
  if ( dino.species.length > 10){
    newSpecies = dino.species.slice(0,7) + '...'
  } else {
    newSpecies = dino.species;
  }

  return makeDino(newSpecies, dino.period, dino.carnivore, dino.extinct);
}

//makeExtinct
const makeExtinct = function(dino){
  return makeDino(dino.species, dino.period, dino.carnivore, dino.extinct = true);
}

//singularizeDinos
const singularizeDinos = function(dino){
  return dino.map(makeSingular);
}

//truncateDinos
const truncateDinos = function(dino){
  return dino.map(truncateSpecies);
}

//makeAllExtinct
const makeAllExtinct = function(dino){
  // if(dino.extinct =false){
  //   newExtinct = true;
  // } else {
  //   newExtinct = dino.extinct;
  // }

  // return makeDino(dino.species, dino.period, dino.carnivore, newExtinct);
  
}

//carnivoresOnly
const carnivoresOnly = function(dino){
  return dino.filter(isCarnivore);
}

//herbivoresOnly
const herbivoresOnly= function(dino){
  return dino.filter(function(dino){
    return dino.carnivore === false;
  });
}

//extinctOnly
const extinctOnly = function(dino){
  return dino.filter(function(dino){
    return dino.extinct === true;
  })
}

//notExtinct
const notExtinct = function(dino){
  return dino.filter(function(dino){
    return !isExtinct(dino);
  })
}

//triassicOnly
const triassicOnly = function(dino){
  return dino.filter(function(dino){
    return isTriassic(dino)
  });
}

//notTriassic
const notTriassic = function(dino){
  return dino.filter(function(dino){
    return !isTriassic(dino);
  })
}
/*********************************
 * TEST SETUP CODE - DON'T TOUCH!*
 ********************************/

if (typeof makeDino === "undefined") {
  makeDino = undefined;
}

if (typeof makeSingular === "undefined") {
  makeSingular = undefined;
}

if (typeof truncateSpecies === "undefined") {
  truncateSpecies = undefined;
}

if (typeof makeExtinct === "undefined") {
  makeExtinct = undefined;
}

if (typeof isCarnivore === "undefined") {
  isCarnivore = undefined;
}

if (typeof isExtinct === "undefined") {
  isExtinct = undefined;
}

if (typeof isTriassic === "undefined") {
  isTriassic = undefined;
}

if (typeof isJurassic === "undefined") {
  isJurassic = undefined;
}

if (typeof isCretaceous === "undefined") {
  isCretaceous = undefined;
}

if (typeof isFirstAlphabeticallyBySpecies === "undefined") {
  isFirstAlphabeticallyBySpecies = undefined;
}

if (typeof extinctIsLast === "undefined") {
  extinctIsLast = undefined;
}

if (typeof carnivoreIsFirst === "undefined") {
  carnivoreIsFirst = undefined;
}

if (typeof isInPeriodOrder === "undefined") {
  isInPeriodOrder = undefined;
}

if (typeof singularizeDinos === "undefined") {
  singularizeDinos = undefined;
}

if (typeof truncateDinos === "undefined") {
  truncateDinos = undefined;
}

if (typeof makeAllExtinct === "undefined") {
  makeAllExtinct = undefined;
}

if (typeof carnivoresOnly === "undefined") {
  carnivoresOnly = undefined;
}

if (typeof herbivoresOnly === "undefined") {
  herbivoresOnly = undefined;
}

if (typeof extinctOnly === "undefined") {
  extinctOnly = undefined;
}

if (typeof notExtinct === "undefined") {
  notExtinct = undefined;
}

if (typeof triassicOnly === "undefined") {
  triassicOnly = undefined;
}

if (typeof notTriassic === "undefined") {
  notTriassic = undefined;
}

if (typeof bySpecies === "undefined") {
  bySpecies = undefined;
}

if (typeof byExtinctLast === "undefined") {
  byExtinctLast = undefined;
}

if (typeof byCarnivoresFirst === "undefined") {
  byCarnivoresFirst = undefined;
}

if (typeof byPeriod === "undefined") {
  byPeriod = undefined;
}

module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isExtinct,
  isTriassic,
  isJurassic,
  isCretaceous,
  isFirstAlphabeticallyBySpecies,
  extinctIsLast,
  carnivoreIsFirst,
  isInPeriodOrder,
  singularizeDinos,
  truncateDinos,
  makeAllExtinct,
  carnivoresOnly,
  herbivoresOnly,
  extinctOnly,
  notExtinct,
  triassicOnly,
  notTriassic,
  bySpecies,
  byExtinctLast,
  byCarnivoresFirst,
  byPeriod,
};
