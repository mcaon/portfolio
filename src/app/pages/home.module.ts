import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {BasicelementsComponent} from '../components/basicelements/basicelements.component';
import {NavigationComponent} from '../components/navigation/navigation.component';
import {TypographyComponent} from '../components/typography/typography.component';
import {NucleoiconsComponent} from '../components/nucleoicons/nucleoicons.component';
import {NotificationComponent} from '../components/notification/notification.component';
import {NgbdModalComponent, NgbdModalContent} from '../components/modal/modal.component';
import {JwBootstrapSwitchNg2Module} from 'jw-bootstrap-switch-ng2';
import {NouisliderModule} from 'ng2-nouislider';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HomeComponent} from './home.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NouisliderModule,
    RouterModule,
    JwBootstrapSwitchNg2Module,
    FontAwesomeModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    BasicelementsComponent,
    NavigationComponent,
    TypographyComponent,
    NucleoiconsComponent,
    NotificationComponent,
    NgbdModalComponent,
    NgbdModalContent
  ],
  entryComponents: [NgbdModalContent],
  exports: [HomeComponent]
})
export class HomeModule {
}
