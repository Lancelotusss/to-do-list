import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  tasks!: Task[];
  inputtask: string = ''
  constructor() {}

  ngOnInit(): void {
    this.tasks = [
      {
        task: 'Learn to code',
        completed: true,
      },
      {
        task: 'Learn to draw',
        completed: false,
      },
    ];
  }
  toggleDone(id:number) {
    this.tasks.map((v, i) => {
      if (i == id) v.completed = !v.completed
      return v
    })
  }
  removeTask(id: number) {
    this.tasks = this.tasks.filter((v , i) => i !== id)
  }
  addTask() {
    this.tasks.push({
      task: this.inputtask,
      completed: false
    })
    this.inputtask = ''
  }
}
