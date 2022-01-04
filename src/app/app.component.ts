import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workflow-app';
  header = "Workflow Drag & Drop";
  workflowItems = [
    "Input",
    "Join",
    "Filter",
    "Partition",
    "Read",
    "Write",
    "Output"
  ];
  workflowArea = [
    "OutputArea"
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data, event.container.data,
        event.previousIndex, event.currentIndex)
    } else {
      moveItemInArray(this.workflowItems, event.previousIndex, event.currentIndex);
    }
  }

  
}
