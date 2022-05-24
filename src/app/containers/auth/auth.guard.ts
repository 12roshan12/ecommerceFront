
import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree
} from "@angular/router";
import Swal from "sweetalert2";
import { AuthService } from "./auth.service";
  
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Promise<boolean> {
            
           console.log('queryParams is '+ route.queryParams);
           
            console.log("state url is" + state.url);
            
            
            
        var isAuthenticated = this.authService.getAuthStatus();
        if (!isAuthenticated) {
             Swal.fire('','Please Login First','error')
            this.router.navigate(['/login']);
        }
        // else{
        //     this.router.navigate([`${state.url}`]);
        // }
        
        return isAuthenticated;
    }
    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Promise<boolean> {
            
           console.log('queryParams is '+ route.queryParams);
           
            console.log("state url is" + state.url);
            
            
            
        var isAuthenticated = this.authService.getAuthStatus();
        if (!isAuthenticated) {
             Swal.fire('','Please Login First','error')
            this.router.navigate(['/login']);
        }
        // else{
        //     this.router.navigate([`${state.url}`]);
        // }
        
        return isAuthenticated;
    }
}