import locations from './store/locations';
import './input.css';

locations.init().then((res) => {
  console.log(res);
  console.log(locations);
  console.log(locations.getCitiesByCountryCode('PE'));
});
