import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created by <b>Issac </b> AG Ireland Ministry </span>
    <div class="socials">
      <a href="https://github.com/issacvp" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.facebook.com/issac.prasad.9" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://www.linkedin.com/in/issac-prasad-48104959/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
