import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { environment } from 'src/environments/environment'
import { apiRoutes } from 'src/app/config/api-routes'

import { Credentials, User } from '../models/auth.model'

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}

    signIn(credentials: Credentials) {
        const result = this.http.post<User>(
            `${environment.apiUrl}/${apiRoutes.signIn}`,
            {
                email: credentials.email,
                password: credentials.password
            }
        )

        return result
    }
}
