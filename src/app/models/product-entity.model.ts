import { CategoryEntity } from "./category-entity.model";

export class ProductEntity {

      name : string ;
	description : string;
      priceVente :number;
	priceAchat : number;
	quantite :number;
      image : string;
      category :CategoryEntity ;
}
