import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

declare var $: any;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  newUser: User = new User(0, '', '', 0, '');

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data: User[]) => this.users = data,
      (error) => console.error(error)
    );
  }

  onSubmit(): void {
    console.log('Form submitted'); 
    this.newUser.id = this.users.length + 1;
    this.users.push({ ...this.newUser });
    this.newUser = new User(0, '', '', 0, '');
    $('#addUserModal').modal('hide');
  }

  onDeleteUser(userId: number): void {
    this.users = this.users.filter(user => user.id !== userId);
  }
}
