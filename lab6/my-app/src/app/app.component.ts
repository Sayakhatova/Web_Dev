import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab6';

  choosePage(path: number) {
    const home = document.getElementById("home");
    const about = document.getElementById("about");
    const albums = document.getElementById("albums");
    if (path == 1) {
      if (home && about && albums) {
        home.classList.add("active");
        albums.classList.remove("active");
        about.classList.remove("active");
      }
    }
    if (path == 2) {
      if (home && about && albums) {
        home.classList.remove("active");
        albums.classList.remove("active");
        about.classList.add("active");
      }
    }
    if (path == 3) {
      if (home && about && albums) {
        home.classList.remove("active");
        about.classList.remove("active");
        albums.classList.add("active")
      }
    }


  }
}