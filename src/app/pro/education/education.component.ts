import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./education.component.css']
 
  
})
export class EducationComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg' });
  }

  ngOnInit() {
  }

}
