import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: any[] = [];

  constructor() {
 
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
    }
  }

  register(user: any): void {
  
    if (!this.users.find((u) => u.username === user.username)) {
      this.users.push(user);

      localStorage.setItem('users', JSON.stringify(this.users));
    } else {
      alert('Username already exists!');
    }
  }

  login(username: string, password: string): boolean {
    const user = this.users.find((u) => u.username === username && u.password === password);
    if (user) {
     
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout(): void {
 
    localStorage.removeItem('currentUser');
  }

  getCurrentUser(): any {
    
    const currentUser = localStorage.getItem('currentUser');
    return currentUser ? JSON.parse(currentUser) : null;
  }

  isAuthenticated(): boolean {
   
    return this.getCurrentUser() !== null;
  }
}
