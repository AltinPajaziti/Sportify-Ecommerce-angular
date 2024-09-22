import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUser } from '../constants/Interfaces/LoginUser';
import { Router } from '@angular/router'; // Removed 'Route' and corrected Router import
import { environment } from 'src/environments/envirement';
import { Register } from '../constants/Interfaces/Register';
import { catchError, type Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private ap_url = environment.api_Url + 'Authentication/';

  constructor(private http: HttpClient, private router: Router) {} 

  login(email: string, password: string): Observable<LoginUser> {
    return this.http.post<LoginUser>(`${this.ap_url}Login`, { email, password }).pipe(
      catchError(err => {
        console.error('Login error:', err);
        this.router.navigate(['']);
        throw err; 
      })
    );
  }

  Register(register : Register){
    this.http.post<Register>(this.ap_url + 'Register',register ,{headers: this.Headers()}).subscribe({
      next : Respounse =>{
        console.log(Respounse)
      }

    })
  }


  Headers():HttpHeaders{
    const  token = localStorage.getItem('Token')
    return new HttpHeaders({
      'Authorization' : `bearer ${token}`
    })
    
  }
}
