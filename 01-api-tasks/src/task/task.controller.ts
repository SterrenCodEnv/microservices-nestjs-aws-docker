import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ITask } from 'src/task.interface';
import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('api/v1/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async create(@Body() body: TaskDTO): Promise<ITask> {
    return await this.taskService.create(body);
  }

  @Get('collection')
  async get(): Promise<ITask[]> {
    return await this.taskService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<ITask> {
    return await this.taskService.findById(id);
  }

  @Get('search')
  search(@Query() data: any): string {
    const { id, description, isDone } = data;
    return `Search tasks with ID: ${id}, description: ${description} and isDone: ${isDone}`;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: TaskDTO): Promise<ITask> {
    return await this.taskService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<string> {
    return await this.taskService.delete(id);
  }

  @Get('error/:type')
  async error(@Param('type') type: string): Promise<string> {
    if (type === 'bad-request') {
      throw new BadRequestException('Bad request');
    }
    if (type === 'http') {
      throw new HttpException('Http exception', HttpStatus.BAD_REQUEST);
    }
    if (type === 'global-filter-exception') {
      return new Promise((resolve, reject) => {
        setTimeout(() => reject('Error de peticion'), 2000);
      });
    }
  }

  @Get('interceptor/timeout')
  async interceptor(): Promise<any> {
    return await new Promise((resolve, reject) => {
      setTimeout(() => reject('Something was wrong!'), 15000);
    });
  }
}
