import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TokenServiceService } from 'src/app/services/token-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver,
    private router: Router,
    public tokenService: TokenServiceService) {
  }
  ngOnInit(): void {
    if (this.tokenService.isLogged()) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  // @ViewChild('drawer') drawer!: MatSidenav;
  empresa: string = ""
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  closeAllSidenav() {
    this.isHandset$.subscribe(isVisible => {
      if (isVisible) {
        // this.drawer.close()
      }
    });
  }

  logout() {
    this.tokenService.logout();
    window.location.reload()
    this.router.navigate(['/login']);
  }
}
