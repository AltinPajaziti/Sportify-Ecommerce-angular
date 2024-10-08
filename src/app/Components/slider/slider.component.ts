import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  images = [1, 2, 3].map((n) => `assets/Images/p${n}.png`);

}
