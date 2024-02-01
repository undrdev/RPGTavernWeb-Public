import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule, MatList } from '@angular/material/list';
import { MatFormFieldModule, matFormFieldAnimations } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule, } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule} from '@angular/material/tabs';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { CarouselModule } from 'ngx-owl-carousel-o';


import { AppRoutingModule } from './shared/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthService } from './services/auth.service';
import { QuickEncounterComponent } from './components/quick-encounter/quick-encounter.component';
import { DesignComponent } from './components/design/design.component';
import { CompendiumComponent } from './compendium/compendium.component';
import { AboutComponent } from './about/about.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { MonsterFormComponent } from './components/monster-form/monster-form.component';
import { MonsterCardComponent } from './components/monster-card/monster-card.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { CombatListComponent } from './components/combat-list/combat-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    QuickEncounterComponent,
    DesignComponent,
    CompendiumComponent,
    AboutComponent,
    PlayerCardComponent,
    PlayerFormComponent,
    MonsterFormComponent,
    MonsterCardComponent,
    PlayerListComponent,
    CombatListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatButtonModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatTabsModule,
    MatProgressBarModule,
    MatTableModule,
    MatIconModule,
    MatExpansionModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    CarouselModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAuthModule,
    // AngularFirestoreModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
