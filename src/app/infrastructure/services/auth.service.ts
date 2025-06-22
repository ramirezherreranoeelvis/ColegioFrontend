import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
        providedIn: 'root'
})
export class AuthService {
        private currentUserSubject: BehaviorSubject<User | null>;
        public currentUser: Observable<User | null>;

        constructor() {
                this.currentUserSubject = new BehaviorSubject<User | null>(null);
                this.currentUser = this.currentUserSubject.asObservable();
        }

        public get currentUserValue(): User | null {
                return this.currentUserSubject.value;
        }

        public setCurrentUser(user: User): void {
                this.currentUserSubject.next(user);
        }

        public clearCurrentUser(): void {
                this.currentUserSubject.next(null);
        }
}
