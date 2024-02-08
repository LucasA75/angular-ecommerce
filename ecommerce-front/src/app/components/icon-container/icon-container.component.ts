import { Component, Input, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';


@Component({
  selector: 'app-icon-container',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './icon-container.component.html',
  styleUrl: './icon-container.component.css'
})
export class IconContainerComponent {
  @Input() icon : IconProp | undefined = undefined
  @Input() title = ""
  @Input() text = ""

}
