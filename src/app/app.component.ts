import { Component, signal } from '@angular/core';
import { DxoButtonOptionsModule } from 'devextreme-angular/ui/nested';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'table-project';
  isDrawerOpen = signal(false);
  buttonOptions: DxoButtonOptionsModule = {
    icon: 'menu',
    onClick: () => {
      this.isDrawerOpen.set(!this.isDrawerOpen());
    },
  };
}
