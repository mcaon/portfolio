import {Component, ElementRef, Inject, OnInit, ViewChild, Renderer2} from '@angular/core';
import 'rxjs/add/operator/filter';
import {Subscription} from 'rxjs';
import {NavigationEnd, Router} from '@angular/router';
import {DOCUMENT, Location} from '@angular/common';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {PrincipalService} from './shared/service/principal.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public showNavbar = false;
  private _router: Subscription;
  @ViewChild(NavbarComponent) navbar: NavbarComponent;

  constructor(
    private renderer: Renderer2,
    private router: Router,
    @Inject(DOCUMENT, ) private document: any,
    private element: ElementRef,
    public location: Location,
    private principal: PrincipalService,
    public translate: TranslateService,
  ) {
    this.principal.setLanguageCode(this.principal.getDefaultLanguage().code);
    this.translate.setDefaultLang(this.principal.getDefaultLanguage().code);
  }

  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement.children[0].children[0];
    this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
      if (window.outerWidth > 991) {
        window.document.children[0].scrollTop = 0;
      } else {
        window.document.activeElement.scrollTop = 0;
      }
      this.navbar.sidebarClose();
    });
    this.renderer.listen('window', 'scroll', (event) => {
      const numberScroll = window.scrollY;
      const innerHeight = window.innerHeight;
      if (numberScroll > 10 || window.pageYOffset > 10) {
        this.showNavbar = true;
      } else {
        this.showNavbar = false;
      }
      if (numberScroll > innerHeight - 25) {
        // add logic
        navbar.classList.remove('navbar-transparent');
      } else {
        // remove logic
        navbar.classList.add('navbar-transparent');
      }
    });
    const ua = window.navigator.userAgent;
    const trident = ua.indexOf('Trident/');
    let version = null;
    if (trident > 0) {
      // IE 11 => return version number
      const rv = ua.indexOf('rv:');
      version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }
    if (version) {
      const body = document.getElementsByTagName('body')[0];
      body.classList.add('ie-background');

    }

  }

  removeFooter() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice(1);
    if (titlee === 'signup' || titlee === 'nucleoicons') {
      return false;
    } else {
      return true;
    }
  }
}
