import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { SharedModule } from 'src/app/shared/shared.module'

import { SignInComponent } from './components/sign-in/sign-in.component'
import { LogInComponent } from './components/log-in/log-in.component'

@NgModule({
    declarations: [SignInComponent, LogInComponent],
    imports: [CommonModule, ReactiveFormsModule, SharedModule]
})
export class AuthModule {}
