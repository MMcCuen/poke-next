export enum PokemonType {
  Normal = "Normal",
  Fire = "Fire",
  Water = "Water",
  Electric = "Electric",
  Grass = "Grass",
  Ice = "Ice",
  Fighting = "Fighting",
  Poison = "Poison",
  Ground = "Ground",
  Flying = "Flying",
  Psychic = "Psychic",
  Bug = "Bug",
  Rock = "Rock",
  Ghost = "Ghost",
  Dragon = "Dragon",
  Dark = "Dark",
  Steel = "Steel",
  Fairy = "Fairy"
};

export enum PokemonGeneration {
Kanto = 'Kanto',
Johto = 'Johto',
Hoenn = 'Hoenn',
Sinnoh = 'Sinnoh',
Unova = 'Unova',
Kalos = 'Kalos',
Alola = 'Alola',
Galar = 'Galar',
Paldea = 'Paldea',
}

export enum PokemonGenerationByNumber {
Kanto = '001-151',
Johto = '152-251',
Hoenn = '252-386',
Sinnoh = '387-493',
Unova = '494-649',
Kalos = '650-721',
Alola = '722-809',
Galar = '810-905',
Paldea = '906-1017',
}


export type Pokemon =
  {
    name: string,
    image: any,
    // type: PokemonType,
    id: number
  }
