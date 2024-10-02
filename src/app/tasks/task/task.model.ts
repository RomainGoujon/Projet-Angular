export type Task = {
  id: string;
  userId: string;
  titre: string;
  description: string;
  dueDate: string;
};

export type NewTaskData = {
  title: string;
  summary: string;
  dueDate: string;
};
