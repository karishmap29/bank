import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-deleteconfirm',
  templateUrl: './deleteconfirm.component.html',
  styleUrls: ['./deleteconfirm.component.css']
})
export class DeleteconfirmComponent implements OnInit {

  @Input() item: String | undefined

  //event creation

  @Output() oncancel = new EventEmitter()

  @Output() onDelete = new EventEmitter()

  constructor() { }

  ngOnInit(): void {

  }
  onCancel() {
    //start event
    this.oncancel.emit()
  }

  deleteAcc() {
    this.onDelete.emit(this.item)
  }
}
