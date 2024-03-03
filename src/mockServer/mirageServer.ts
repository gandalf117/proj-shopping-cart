import { createServer, Model } from 'miragejs';
import { cocktails } from './cocktails';
import { countries } from './countries';
import { Cocktail, Country, City } from 'types';
import { cities } from './cities';

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      cocktail: Model.extend<Partial<Cocktail>>({}),
      country: Model.extend<Partial<Country>>({}),
      city: Model.extend<Partial<City>>({}),
    },

    seeds(server) {
      cocktails.forEach(cocktail => server.create("cocktail", cocktail as any));
      countries.forEach(country => server.create("country", country as any));
      cities.forEach(city => server.create("city", city as any));
    },

    routes() {
      this.namespace = "api";

      this.get("/cocktails", (schema) => {
        return schema.all('cocktail');
      });

      this.get("/countries", (schema) => {
        return schema.all('country');
      });

      this.get("/cities", (schema) => {
        return schema.all('city');
      });
    },
  });

  return server;
}