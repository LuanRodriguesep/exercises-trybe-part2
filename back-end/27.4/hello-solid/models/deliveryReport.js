"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryReport = void 0;
const abstractReport_1 = require("./abstractReport");
class DeliveryReport extends abstractReport_1.AbstractReport {
    builderBody() {
        return JSON.stringify(["Dudu", "2019", "Master"]);
    }
    builderFooter() {
        return JSON.stringify(["Report of Trybe Copyright 2022"]);
    }
}
exports.DeliveryReport = DeliveryReport;
