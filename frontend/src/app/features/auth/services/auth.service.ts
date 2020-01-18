import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { environment } from 'src/environments/environment'
import { apiRoutes } from 'src/app/config/api-routes'

import { Credentials } from '../models/auth.model'

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}

    signIn(credentials: Credentials) {
        return this.http.post(`${environment.apiUrl}/${apiRoutes.signIn}`, {
            email: 'test',
            password: 'test'
        })
    }
}
