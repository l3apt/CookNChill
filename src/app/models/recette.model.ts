export class Recette {
  constructor(
  	public id: number,
  	public recetteName: string,
    public recetteDificulty: string,
    public recetteTime: string,
    public recetteAddDate: string,
    public listeIngredients?: any[]
  ) {}
} 			    