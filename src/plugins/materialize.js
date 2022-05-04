/* eslint-disable no-undef */
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';

// Init select
const selects = document.querySelectorAll('select');// получили все автокомплиты
M.FormSelect.init(selects);// через спец функцию инит для объекта Autocomplete инициализируем это

export function getSelectInstance(elem) {
  return M.FormSelect.getInstance(elem);
}

// Init Autocomplete
const allAutocomplete = document.querySelectorAll('.autocomplete'); // находим все эл с классов автокомплит
M.Autocomplete.init(allAutocomplete); 

// Пример из доки для проверки
// const allAutocomplete = document.querySelectorAll('.autocomplete');
//     "Apple": null,
//     "Microsoft": null,
//     "Google": 'https://placehold.it/250x250'
//   }});

export function getAutocompleteInstance(elem) {
  return M.Autocomplete.getInstance(elem);
}

// Init Datepicker
const datepickers = document.querySelectorAll('.datepicker');
M.Datepicker.init(datepickers, {
  showClearBtn: true,
  format: 'yyyy-mm-dd',
});

export function getDatePickerInstance(elem) {
  return M.Datepicker.getInstance(elem);
}
