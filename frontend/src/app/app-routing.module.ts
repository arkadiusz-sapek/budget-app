import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { routes } from './routes'

import { DashboardComponent } from './features/dashboard/components/dashboard.component'
import { LogInComponent } from './features/auth/components/log-in/log-in.component'
import { SignInComponent } from './features/auth/components/sign-in/sign-in.component'

const appRoutes: Routes = [
    {
        path: routes.dashboard,
        component: DashboardComponent
    },
    {
        path: routes.logIn,
        component: LogInComponent
    },
    {
        path: routes.signIn,
        component: SignInComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
