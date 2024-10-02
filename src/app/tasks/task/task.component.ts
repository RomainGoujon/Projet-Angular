import { Component, Input } from '@angular/core';

type Task = {
  id: string;
  userId: string;
  titre: string;
  description: string;
  date: string;
};

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
}
