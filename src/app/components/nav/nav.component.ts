import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
      showbtn() {
        const navbar = document.getElementById('elements');
        if (navbar) {
          if (navbar.style.display === 'block') {
            navbar.style.display = 'none'; 

          } else {
            navbar.style.display = 'block';
          }
        }
      }
}
