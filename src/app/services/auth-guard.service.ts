import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { RecetteService } from './recette.service';
import { Injectable } from '@angular/core';

@Injectable()

export class AuthGuard implements CanActivate {

  id: number;
  indexRecette: number;


  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute,
              private recetteService: RecetteService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.indexRecette = this.recetteService.recetteIndexById(this.id);
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    


    if(this.authService.isAuth) {
      if (this.recetteService.recettes[this.indexRecette].cookerName == this.authService.userConnected){
        return true;  
      }
    } 
    else {
      this.router.navigate(['/auth']);
    }
  }
}