import { Injectable } from '@angular/core';

import { NewTaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      titre: 'Master Angular',
      description:
        "Découvrez toutes les fonctionnalités de base et avancées d'Angular et comment les appliquer.",
      dueDate: '31-12-2025',
    },
    {
      id: 't2',
      userId: 'u3',
      titre: 'Faire premier pototype',
      description:
        'Construire un premier prototype du site de boutique en ligne',
      dueDate: '31-05-2025',
    },
    {
      id: 't3',
      userId: 'u3',
      titre: 'Preparer une solution pour le projet',
      description:
        'Préparer et décrire un modèle de problème qui aidera à la gestion de projet',
      dueDate: '15-06-2025',
    },
  ];

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      titre: taskData.title,
      description: taskData.summary,
      dueDate: taskData.dueDate,
    });
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
