import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from './services/auth.service';
import { Router, NavigationEnd  } from '@angular/router';

declare let gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit{
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  title = 'rpg-tavern-app';
  constructor(
    public authService: AuthService,
    private observer: BreakpointObserver,
    public router: Router,
    private cdr: ChangeDetectorRef) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd){
        gtag('config', 'G-CX4JLHZGSB', {'page_path': event.urlAfterRedirects});
      }
    });
  }

  layout = 'handset';
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }

      const layoutChanges = this.observer.observe([
        '(max-width: 800px)',
        '(min-width: 801px)',
        '(min-width: 1200px)'
      ]).subscribe(result => {
        if (result.breakpoints['(max-width: 800px)']){
          this.layout = 'handset';
        }
        if (result.breakpoints['(min-width: 801px)']){
          this.layout = 'tablet';
        }
        if (result.breakpoints['(min-width: 1200px)']){
          this.layout = 'full';
        }
      });
    });
  }

}
