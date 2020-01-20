import { Injectable } from '@angular/core'
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent
} from '@angular/common/http'
import { Observable } from 'rxjs'

import { StorageService } from '../services/storage.service'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private readonly storageService: StorageService) {}
    //These any really can be anything
    intercept(
        // tslint:disable-next-line: no-any
        req: HttpRequest<any>,
        next: HttpHandler
        // tslint:disable-next-line: no-any
    ): Observable<HttpEvent<any>> {
        const token = this.storageService.getItem('token')

        if (token) {
            const clonedReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + token)
            })

            return next.handle(clonedReq)
        } else {
            return next.handle(req)
        }
    }
}
