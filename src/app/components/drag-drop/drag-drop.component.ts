import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {

  constructor() { }

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

  ngOnInit(): void {
  }

}
