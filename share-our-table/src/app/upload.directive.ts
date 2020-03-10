import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[upload]'
})
export class UploadDirective {

  @Output() uploaded = new EventEmitter<FileList>();

  @HostListener('upload', ['$event'])
  onUpload($event) {
    $event.preventDefault();
    this.uploaded.emit($event.dataTransfer.files)
  }
}