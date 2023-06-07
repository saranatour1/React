console.time('myTimer');
const pokémon = Object.freeze([
      { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
      { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
      { "id": 9,   "name": "Blastoise",  "types": ["water"] },
      { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
      { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
      { "id": 23,  "name": "Ekans",      "types": ["poison"] },
      { "id": 24,  "name": "Arbok",      "types": ["poison"] },
      { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
      { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
      { "id": 52,  "name": "Meowth",     "types": ["normal"] },
      { "id": 63,  "name": "Abra",       "types": ["psychic"] },
      { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
      { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
      { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
      { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
      { "id": 98,  "name": "Krabby",     "types": ["water"] },
      { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
      { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
      { "id": 133, "name": "Eevee",      "types": ["normal"] },
      { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
      { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
      { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
      { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
  ]);
  
  // the object as it is in the form of a table.
  // console.table(pokémon);
const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
// console.table(bListPkmn);
// ┌─────────┬────┬──────────────┬───────────────────────┐
// │ (index) │ id │     name     │         types         │
// ├─────────┼────┼──────────────┼───────────────────────┤
// │    0    │ 1  │ 'Bulbasaur'  │ [ 'poison', 'grass' ] │
// │    1    │ 9  │ 'Blastoise'  │      [ 'water' ]      │
// │    2    │ 12 │ 'Butterfree' │  [ 'bug', 'flying' ]  │
// └─────────┴────┴──────────────┴───────────────────────┘

const pkmnIds = pokémon.map( p => p.id );
// console.log(pkmnIds);

console.timeEnd('myTimer');
// Requirments 
// an array of pokémon objects where the id is evenly divisible by 3 
const pokemonDivisibleByThree = pokémon.filter((elem) => elem.id %3 ===0);
console.table(pokemonDivisibleByThree);
// console.info(pokemonDivisibleByThree);
// console.assert(pokemonDivisibleByThree);
// console.warn(pokemonDivisibleByThree);
// console.debug(pokemonDivisibleByThree);
console.timeStamp();



// an array of pokémon objects that are "fire" type
const fireTypePokemon = pokémon.filter((elem) => elem.types.includes("fire"));
// console.table(fireTypePokemon);

// an array of pokémon objects that have more than one type
const multiTypePokemon = pokémon.filter((elem)=> elem.types.length > 1);
// console.table(multiTypePokemon);
// // console.log(typeof(multiTypePokemon));

// an array with just the names of the pokémon
const pokemonNames = pokémon.map((elem) => elem.name);
// console.log(pokemonNames);

// an array with just the names of pokémon with an id greater than 99
const pokemonNamesGreaterThan99 = pokémon.filter((e) => e.id > 99).map(e => e.name);
// console.log(pokemonNamesGreaterThan99);

// an array with just the names of the pokémon whose only type is poison
const poisonTypePokemonNames = pokémon.filter(e => e.types.includes("poison")).map(e => e.name);
// console.log(poisonTypePokemonNames);

// an array containing just the first type of all the pokémon whose second type is "flying"
const flyingSecondTypePokemonFirstType = pokémon.filter(e => e.types.includes("flying")).map(e=>e.types[0]);
// console.log(flyingSecondTypePokemonFirstType);

// a count of the number of pokémon that are "normal" type
const countPokemonOfTypeNormal = pokémon.filter(e => e.types.includes("normal")).length;
// console.log(countPokemonOfTypeNormal);





