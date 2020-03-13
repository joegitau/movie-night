import { Component, OnInit } from '@angular/core';
import { NavbarService } from './services/navbar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  movieTitle$ = this.navbarService.movieTitle;
  movieGenre$ = this.navbarService.movieGenre;

  constructor(private navbarService: NavbarService) { }

  ngOnInit(): void {
  }

}
