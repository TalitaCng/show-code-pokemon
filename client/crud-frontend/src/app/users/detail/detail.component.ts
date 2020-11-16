import {Component, Inject, OnInit} from '@angular/core';
import {UsersService} from '../../service/users.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {User} from '../../model/user.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  user: User;
  pokemonUrl: string;
  constructor(public usersService: UsersService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<DetailComponent>) { }

  ngOnInit(): void {
    this.user = this.getDetails(this.data.id);
  }

  getDetails(id: number): any {
    this.usersService.findById(id).subscribe(
      data => {
        this.user = data.body;
        this.pokemonUrl = 'https://img.pokemondb.net/artwork/large/' + this.user.pokemonName + '.jpg';
      },
      error => {
        console.log(error);
      }
    );
  }

}
