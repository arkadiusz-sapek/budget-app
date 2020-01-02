import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { environment } from '../environments/environment'

import { AuthModule } from './features/auth/auth.module'
import { DashboardModule } from './features/dashboard/dashboard.module'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production
        }),
        AuthModule,
        DashboardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
