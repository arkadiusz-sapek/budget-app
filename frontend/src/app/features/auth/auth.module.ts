import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { SignInComponent } from './components/sign-in/sign-in.component'
import { LogInComponent } from './components/log-in/log-in.component'

@NgModule({
    declarations: [SignInComponent, LogInComponent],
    imports: [CommonModule]
})
export class AuthModule {}
