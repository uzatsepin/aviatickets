import api from '../services/apiService';

class Locations {
  constructor(api) {
    this.api = api;
    this.countries = null;
    this.cities = null;
  }

  async init() {
    const response = await Promise.all([
      this.api.countries(),
      this.api.cities(),
    ]);

    const [countries, cities] = response;
    this.countries = this.serializeCountries(countries);
    this.cities = this.serializeCities(cities);
    this.shortCitiesList = this.createShortCitiesList(this.cities);
    return response;
  }

  getCityCodeByKey(key) {
    return this.cities[key].code;
  }

  createShortCitiesList(cities) {
    return Object.entries(cities).reduce((acc, [key]) => {
      acc[key] = null;
      return acc;
    }, {});
  }

  serializeCountries(countries) {
    return countries.reduce((acc, country) => {
      acc[country.code] = country;
      return acc;
    }, {});
  }

  getCountryNameByCityCode(code) {
    return this.countries[code].name;
  }

  serializeCities(cities) {
    return cities.reduce((acc, city) => {
      const country_name = this.getCountryNameByCityCode(city.country_code);
      const city_name = city.name || city.name_translations.en;
      const key = `${city_name},${country_name}`;
      acc[key] = city;
      return acc;
    }, {});
  }

  getCitiesByCountryCode(code) {
    return this.cities.filter((city) => city.country_code === code);
  }

  async fetchTickets(params) {
    const response = await this.api.prices(params);
    console.log(response);
  }
}

const location = new Locations(api);
export default location;
