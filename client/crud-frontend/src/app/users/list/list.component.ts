import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {User} from '../../model/user.model';
import {UsersService} from '../../service/users.service';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmationComponent} from '../../components/modal/confirmation/confirmation.component';
import {UserComponent} from '../user/user.component';
import {DetailComponent} from '../detail/detail.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'email', 'phone', 'actions'];
  users: User[] = [];
  dataSource: MatTableDataSource<User>;
  searchValue: string = null;

  @ViewChild(MatSort) sort: MatSort;

  constructor(public usersSevice: UsersService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getUsers();
    this.usersSevice.initializeSearchFormGroup();
  }

  ngAfterViewInit(): void {

  }

  searchUser() {
    if (this.searchValue === '') {
      this.getUsers();
    } else {
      this.users = this.users.filter(
        u => u.name.toLowerCase().includes(this.searchValue.toLowerCase()));
      this.setDataSource(this.users);
    }
  }

  getUsers(): any {
    this.usersSevice.findAll().subscribe(
      data => {
        this.users = data.body;
        this.setDataSource(this.users);
      },
      error => {
        console.log(error);
      }
    );
  }

  private setDataSource(users: User[]) {
    this.dataSource = new MatTableDataSource<User>();
    this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.sort = this.sort;
  }

  openUserModal(user: User, editMode: boolean) {
    const dialogRef = this.dialog.open(UserComponent, {
      width: '600px',
      data: {user: user, isEditMode: editMode}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getUsers();
      }
    });
  }

  openDetailModal(user: User) {
    const dialogRef = this.dialog.open(DetailComponent, {
      width: '400px',
      data: {id: user.id}
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  openConfirmation(user: User): void {
    const message = 'Are you sure that you want to delete user ' + user.name.toUpperCase() + '?';
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '250px',
      data: {title: 'Delete user', message: message}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deteleUser(user.id);
      }
    });
  }

  deteleUser(id: number): any {
    this.usersSevice.delete(id).subscribe(
      data => {
        this.getUsers();
      },
      error => {
        console.log(error);
      }
    );
  }
}
