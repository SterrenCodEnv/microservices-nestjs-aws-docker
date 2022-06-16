import { Injectable } from '@nestjs/common';
import { ITask } from 'src/task.interface';
import { v4 as uuidv4 } from 'uuid';
import { TaskDTO } from './dto/task.dto';

@Injectable()
export class TaskService {
  tasks: ITask[] = [];

  async create(task: TaskDTO): Promise<ITask> {
    const newTask: ITask = {
      id: uuidv4(),
      ...task,
    };
    !this.tasks.some((task) => task.description === newTask.description)
      ? (this.tasks = [...this.tasks, newTask])
      : [];
    return newTask;
  }

  async findAll(): Promise<ITask[]> {
    return this.tasks;
  }

  async findById(id: string): Promise<ITask> {
    const task = this.tasks.find((task) => task.id === id);
    return task;
  }

  async update(id: string, task: TaskDTO): Promise<ITask> {
    const newTask: ITask = { id, ...task };
    this.tasks = this.tasks.map((task) => {
      return task.id === id ? newTask : task;
    });
    return newTask;
  }

  async delete(id: string): Promise<string> {
    this.tasks = this.tasks.filter((task) => {
      return task.id !== id;
    });
    return `Delete task with ID ${id}`;
  }
}
