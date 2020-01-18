import { NgModule, ModuleWithProviders } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HTTP_INTERCEPTORS } from '@angular/common/http'

import { SharedModule } from 'src/app/shared/shared.module'

import { LayoutComponent } from './layout/layout.component'
import { StorageService } from './services/storage.service'
import { AuthInterceptor } from './interceptors/auth-interceptor'

@NgModule({
    imports: [SharedModule, RouterModule],
    declarations: [LayoutComponent],
    exports: [LayoutComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [StorageService]
        }
    }
}
