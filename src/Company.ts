import { faker } from "@faker-js/faker";
import { Mappable } from './CustomMap';

export class Company implements Mappable{
  companyName: string;
  catchPhrase: string;
  location: {
    lat:number;
    lng: number;
  };
  color: string = 'red';

  constructor(){
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.address.latitude(),
      lng: faker.address.longitude()
    };
  };

  markerContent(): string {
    return `
    <div>
    <h1>Company Name: ${this.companyName}</h1>
    <h3>Catch Phrase : ${this.catchPhrase}<//h3>
    </div>
    `;
  }
};