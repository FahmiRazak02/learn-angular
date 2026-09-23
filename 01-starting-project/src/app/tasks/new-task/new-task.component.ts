import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  private tasksService = inject(TasksService);

  title = '';
  summary = '';
  date = '';

  onCancel = () => {
    this.close.emit();
  };

  onSubmit = () => {
    this.tasksService.addTask(
      {
        title: this.title,
        summary: this.summary,
        date: this.date,
      },
      this.userId,
    );
    this.close.emit();
  };
}
