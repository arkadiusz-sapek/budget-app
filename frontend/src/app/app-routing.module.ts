import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { routes } from './routes'
import { LayoutComponent } from './core/layout/layout.component'

import { DashboardComponent } from './features/dashboard/components/dashboard.component'
import { LogInComponent } from './features/auth/components/log-in/log-in.component'
import { SignInComponent } from './features/auth/components/sign-in/sign-in.component'

const appRoutes: Routes = [
    {
        path: 'user',
        component: LayoutComponent,
        children: [
            {
                path: routes.dashboard,
                component: DashboardComponent,
                pathMatch: 'full'
            },
            { path: '', redirectTo: routes.dashboard, pathMatch: 'full' }
        ]
    },
    {
        path: routes.logIn,
        component: LogInComponent
    },
    {
        path: routes.signIn,
        component: SignInComponent
    },
    { path: '', redirectTo: routes.signIn, pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
