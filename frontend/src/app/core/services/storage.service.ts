import { Injectable } from '@angular/core'

@Injectable()
export class StorageService {
    getItem(field: string, parse: boolean = true) {
        try {
            const localStorageItem = localStorage.getItem(field)

            if (localStorageItem && parse) {
                return JSON.parse(localStorageItem)
            }

            return localStorageItem
        } catch (error) {
            throw Error(error)
        }
    }

    setItem(field: string, data: object | string, parse: boolean = true): void {
        try {
            localStorage.setItem(
                field,
                parse ? JSON.stringify(data) : (data as string)
            )
        } catch (error) {
            throw Error(error)
        }
    }

    removeItem(field: string): void {
        try {
            localStorage.removeItem(field)
        } catch (error) {
            throw Error(error)
        }
    }
}
