import { DeliveryReport } from "./models/deliveryReport";

const obj: DeliveryReport = new DeliveryReport();

obj.nameOfReport = "Report Teste"

console.log(obj.nameOfReport);
console.log(obj.builderHeader());
console.log(obj.builderBody());
console.log(obj.builderFooter());
