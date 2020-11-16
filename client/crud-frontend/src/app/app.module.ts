import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './users/user/user.component';
import {MaterialModule} from './material/material.module';
import {UsersService} from './service/users.service';
import {PokemonService} from './service/pokemon.service';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ListComponent} from './users/list/list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SuperHttpInterceptor} from './interceptor/super-http-interceptor.service';
import { ConfirmationComponent } from './components/modal/confirmation/confirmation.component';
import { DetailComponent } from './users/detail/detail.component';
import {IConfig, NgxMaskModule} from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    ListComponent,
    ConfirmationComponent,
    DetailComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    UsersService,
    PokemonService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SuperHttpInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
