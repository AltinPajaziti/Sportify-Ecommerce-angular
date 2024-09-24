import { inject } from "@angular/core";
import { CanActivateFn, Router } from '@angular/router';

export const AuthGuard : CanActivateFn = (route ,  state)=>{
    const role = localStorage.getItem('role')
    const Route = inject(Router)

    if(role == 'Admin' || role== "User" ){
        return true;
    }
    else{
        Route.navigate(['login']);
        return false
        
    }

}