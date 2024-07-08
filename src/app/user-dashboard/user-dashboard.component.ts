import { Component, computed, signal } from '@angular/core';

const meetings = [
  {
    description: 'Standup',
    participants: ['John', 'Paul', 'Ringo', 'George']
  },
  {
    description: 'Meet with the Bills',
    participants: ['Bill', 'Bill', 'Peter']
  },
  { description: 'Working lunch', participants: ['Joe', 'Jane'] }
];

const todoList = [
  'Attach cover letter to TPS report',
  'Double check decimal places',
  'Jump to conclusions'
];

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  standalone: true
})
export default class UserDashboardComponent {
  showProfile = signal(true);
  nextMeetings = meetings;
  todos = signal(todoList);
  showHideProfileMessage = computed(
    () => `${this.showProfile() ? 'Hide' : 'Show'} Profile`
  );

  addTodo() {
    // set is the basic
    this.todos.set([
      ...this.todos(),
      `Task ${this.todos().length + 1}`
    ]);

    // update is somewhat more advanced
    // this.todos.update(value => [
    //   ...value,
    //   `Task ${value.length + 1}`
    // ]);
  }
}
