import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import { SharedModule } from 'src/app/shared/shared.module'
import { CoreModule } from 'src/app/core/core.module'

import { SignInComponent } from './components/sign-in/sign-in.component'
import { LogInComponent } from './components/log-in/log-in.component'
import * as fromAuth from './reducers/auth.reducer'
import { AuthEffects } from './effects/auth.effect'
import { AuthService } from './services/auth.service'

@NgModule({
    declarations: [SignInComponent, LogInComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        CoreModule,
        StoreModule.forRoot(fromAuth.reducer),
        EffectsModule.forRoot([AuthEffects])
    ],
    providers: [AuthService]
})
export class AuthModule {}
