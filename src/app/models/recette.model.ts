import { Ingredient } from './Ingredient.model';
import { Instruction } from './Instruction.model';
export class Recette {
  constructor(
  	public id: number,
  	public recetteName: string, // nom de la recette
  	public recetteCategory: string, // categorie de la recette (patisserie, plat etc)
    public recetteDificulty: number, // difficulté de la recette (notée sur 5)
    public recetteTime: string, // temps de réalisation de la recette
    public recetteAddDate: string, // date d'ajout de la recette
    public nbPersonne: number, // nombre de personne pour lequel est faite la recette
    public Ingredients?: Ingredient[], // liste des ingrédients
    public Instructions?: Instruction[] //liste des instructions de la recette
  ) {}
} 			    