import faker from "faker";
import { Mappable } from "../components/Map";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  displayContent(): string {
    return `<h4>User Name: ${this.name}</h4>`;
  }
}
