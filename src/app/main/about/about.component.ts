'use strict';

import { Component } from '@angular/core';

@Component({
  template: `<h2>{{ title }}</h2>
  <h3>Some text</h3>
  <p>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
  Aenean commodo ligula eget dolor. Aenean massa.
  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
  Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
  In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
</p>`
})
export class AboutComponent {
  title = 'About';
}
