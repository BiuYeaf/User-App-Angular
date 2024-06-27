import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent {
  @Input() user: User;
  @Output() delete = new EventEmitter<number>();

  onDelete(): void {
    this.delete.emit(this.user.id);
  }
}

