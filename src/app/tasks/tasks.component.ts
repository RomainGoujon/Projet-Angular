import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      titre: 'Master Angular',
      description:
        "Découvrez toutes les fonctionnalités de base et avancées d'Angular et comment les appliquer.",
      date: '31-12-2025',
    },
    {
      id: 't2',
      userId: 'u3',
      titre: 'Build first prototype',
      description:
        'Construire un premier prototype du site de boutique en ligne',
      date: '31-05-2025',
    },
    {
      id: 't3',
      userId: 'u3',
      titre: 'Prepare issue template',
      description:
        'Préparer et décrire un modèle de problème qui aidera à la gestion de projet',
      date: '15-06-2025',
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }
}
