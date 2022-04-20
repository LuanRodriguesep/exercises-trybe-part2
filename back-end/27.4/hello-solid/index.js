"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deliveryReport_1 = require("./models/deliveryReport");
const obj = new deliveryReport_1.DeliveryReport();
obj.nameOfReport = "Report Teste";
console.log(obj.nameOfReport);
console.log(obj.builderHeader());
console.log(obj.builderBody());
console.log(obj.builderFooter());
