import { AbstractReport } from "./abstractReport";

export class DeliveryReport extends AbstractReport{

  public builderHeader(): string{
    return JSON.stringify(["Name", "Year", "Level"])  }

  public builderBody(): string {
    return JSON.stringify(["Dudu", "2019", "Master"])
  }
  public builderFooter(): string {
    return JSON.stringify(["Report of Trybe Copyright 2022"])
  }
}

