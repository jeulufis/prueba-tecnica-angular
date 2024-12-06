import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://dummyjson.com/auth/login';
  private userSubject = new BehaviorSubject<User | null>(null);
  public user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.userSubject.next(JSON.parse(storedUser));
    }
  }

  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(this.apiUrl, { username, password }).pipe(
      tap((user) => {
        // Almacenar usuario en localStorage
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
      })
    );
  }

  logout() {
    // Limpiar usuario de localStorage y el BehaviorSubject
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }

  isLoggedIn(): boolean {
    return !!this.userSubject.value;
  }

  getCurrentUser(): User | null {
    return this.userSubject.value;
  }
}
