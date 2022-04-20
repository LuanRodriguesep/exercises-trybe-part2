"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractReport = void 0;
class AbstractReport {
    constructor() {
        this._nameOfReport = "";
    }
    get nameOfReport() {
        return this._nameOfReport;
    }
    set nameOfReport(name) {
        this._nameOfReport = name;
    }
    builderHeader() {
        return '[Header of Report]';
    }
}
exports.AbstractReport = AbstractReport;
