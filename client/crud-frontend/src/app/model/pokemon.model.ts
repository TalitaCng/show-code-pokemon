export module PokemonModel {

  export class PokemonSpecies {
    name: string;
    url: string;
  }

  export class PokemonSpeciesDetail {
    pokemon_species: PokemonSpecies;
    rate: number;
  }

  export class Pokemon {
    id: number;
    name: string;
    pokemon_species_details: PokemonSpeciesDetail[];
    required_for_evolution: any[];
  }

}
