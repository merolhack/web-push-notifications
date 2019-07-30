import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastService } from 'src/app/services';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.css']
})
export class ToastsComponent implements OnInit {
  toastService: ToastService;

  constructor(toastService: ToastService) {
    this.toastService = toastService;
  }

  ngOnInit() {
  }

  isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }

}
