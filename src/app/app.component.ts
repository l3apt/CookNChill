import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CookNChill';
 

  recettes = [ {
    id : 1,
    recetteName : 'Lasagnes',
    recetteDificulty : '2',
    recetteTime : '00:15',
    recetteAddDate : '08/09/2020'
  }, 
  {
    id : 2,
    recetteName : 'Millefeuille',
    recetteDificulty : '3',
    recetteTime : '00:20',
    recetteAddDate : '08/09/2020'
  }, 
  {
    id : 3,
    recetteName : 'Macaron',
    recetteDificulty : '1',
    recetteTime : '00:10',
    recetteAddDate : '01/04/2020'
  }, 
  {
    id : 4,
    recetteName : 'Crèpes',
    recetteDificulty : '5',
    recetteTime : '00:45',
    recetteAddDate : '06/07/2020'
  } ];
}
