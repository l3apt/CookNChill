import { Ingredient } from './Ingredient.model';
export class Recette {
  constructor(
  	public id: number,
  	public recetteName: string, // nom de la recette
    public recetteDificulty: number, // difficulté de la recette (notée sur 5)
    public recetteTime: string, // temps de réalisation de la recette
    public recetteAddDate: string, // date d'ajout de la recette
    public Ingredients?: Ingredient[], // liste des ingrédients
    public listeInstructions?: any[] //liste des instructions de la recette
  ) {}
} 			    