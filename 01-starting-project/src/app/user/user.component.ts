import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIdx = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIdx]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  name = computed(() => this.selectedUser().name);

  onSelectedUser() {
    const randomIdx = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIdx]);
  }

  // This is for a world without signal
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  // get name() {
  //   return this.selectedUser.name;
  // }

  // onSelectedUser() {
  //   const randomIdx1 = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser = DUMMY_USERS[randomIdx1];
  // }
}
