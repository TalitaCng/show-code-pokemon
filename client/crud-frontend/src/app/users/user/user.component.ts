import {Component, Inject, OnInit} from '@angular/core';
import {UsersService} from '../../service/users.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {User} from '../../model/user.model';
import {PokemonService} from '../../service/pokemon.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {PokemonModel} from '../../model/pokemon.model';
import Pokemon = PokemonModel.Pokemon;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  errorMessage: string = null;
  pokemonUrl = '../../../assets/img/pokeball.gif';
  pokeControl = new FormControl();
  pokemonsSpecies: any;
  selectedPokemon: any;
  pokemons: Pokemon;
  filteredPokemons: Observable<string[]>;
  constructor(public service: UsersService,
              public pokemonService: PokemonService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<UserComponent>) { }

  ngOnInit(): void {
    this.initializeForm();
    this.getPokemonList();

    this.filteredPokemons = this.pokeControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.pokemonsSpecies.filter(option => option.toLowerCase().includes(filterValue));
  }

  onClear(): void {
    this.service.form.reset();
  }

  getPokemonList(): any {
    this.pokemonService.findAll().subscribe(
      data => {
        this.pokemons = data.body;
        this.pokemonsSpecies = this.pokemons.pokemon_species_details.map( item => item.pokemon_species.name);
      },
      error => {
        console.log(error);
      }
    );
  }

  initializeForm() {
    if (this.data.isEditMode) {
      this.service.initializeFormGroupEdition(this.data.user);
    } else {
      this.service.initializeFormGroup();
    }
  }

  onSave(): void {
    this.service.form.disable();
    this.errorMessage = null;
    const user = this.buildUser();

    if (this.data.isEditMode) {
      this.service.update(user).subscribe(
        data => {
          this.onSucess();
        },
        error => {
          this.onError(error);
        }
      );
    } else {
      this.service.create(user).subscribe(
        data => {
          this.onSucess();
        },
        error => {
          this.onError(error);
        }
      );
    }
  }

  private onSucess() {
    this.service.form.enable();
    this.onClear();
    this.dialogRef.close(true);
  }

  private onError(error) {
    this.service.form.enable();
    this.errorMessage = error.error.message;
    console.log(error);
  }

  private buildUser() {
    let user = new User();
    if (this.data.isEditMode) {
      user = this.data.user;
    }
    const form = this.service.form;
    user.name = form.value.name;
    user.email = form.value.email;
    user.phone = form.value.phone;
    user.cpf = form.value.cpf;
    user.pokemonName = this.selectedPokemon;
    return user;
  }

  changeImage() {
    if (this.pokeControl.value === '' || this.pokeControl.value === null || this.pokeControl.value === undefined ) {
      this.pokemonUrl = '../../../assets/img/pokeball.gif';
    } else {
      this.pokemonUrl = 'https://img.pokemondb.net/artwork/large/' + this.pokeControl.value + '.jpg';
    }
  }
}
