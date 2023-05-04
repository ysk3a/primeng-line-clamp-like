import { Component } from '@angular/core';

@Component({
  selector: 'fieldset-toggleable-demo',
  templateUrl: './fieldset-toggleable-demo.html',
  styleUrls: ['./fieldset-toggleable-demo.scss'],
})
export class FieldsetToggleableDemo {
  // collapsed: boolean = true;
  onBeforeToggle(event): void {
    // event.collapsed
    console.log('onbefore', event);
  }
  onAfterToggle(event): void {
    console.log('onafter', event);
  }
}
