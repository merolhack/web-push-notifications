import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  toastService: ToastService;

  constructor(toastService: ToastService) {
    this.toastService = toastService;
  }

  ngOnInit() {
    console.log(this.toastService);
  }

  addToast(type: string = '', template: any = null) {
    switch (type) {
      case 'success':
        this.toastService.show(null, 'I am a success toast', { classname: 'bg-success text-light', delay: 10000 });
        break;
      case 'danger':
        this.toastService.show(null, template, { classname: 'bg-danger text-light', delay: 15000 });
        break;
      default:
        this.toastService.show('Título del aviso', `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`);
    }
  }
}
