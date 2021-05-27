import { InvoiceEntity } from "./invoice-entity";

export class PaymentEntity {

   mode :string;
   datePayment :Date;
   montant? :number ;
   invoice? :InvoiceEntity;

}
