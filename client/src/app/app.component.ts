import {Component, ViewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {HeaderComponent} from "./core/header/header.component";
import {NavigationComponent} from "./core/navigation/navigation.component";
import {ImageGalleryComponent} from "./features/images/components/image-gallery/image-gallery.component";
import {MatNativeDateModule} from "@angular/material/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    MatSidenavContent,
    MatSidenav,
    MatSidenavContainer,
    RouterOutlet,
    NavigationComponent,
    ImageGalleryComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild(MatSidenav) sidenav: MatSidenav | undefined;

  toggleSidenav(): void {
    this.sidenav?.toggle();
  }
}
