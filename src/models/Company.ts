import faker from "faker";
import { Mappable } from "../components/Map";

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  displayContent(): string {
    return `
      Company Name: ${this.companyName}
      Catch Phrase: ${this.catchPhrase}
    `;
  }
}
