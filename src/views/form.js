import { getAutocompleteInstance, getDatePickerInstance } from '../plugins/materialize';

class FormUi {
  constructor(autocompleteInstance, datePickerInstance) {
    this.$form = document.forms['location'];
    this.origin = document.getElementById('autocomplete-origin');
    this.destination = document.getElementById('autocomplete-destination');
    this.depart = document.getElementById('datepicker-depart');
    this.return = document.getElementById('datepicker-return');
    this.originAutocomplete = autocompleteInstance(this.origin);
    this.destinationAutocomplete = autocompleteInstance(this.destination);
    this.departDatePicker = datePickerInstance(this.depart);
    this.returnDatePicker = datePickerInstance(this.return);
  }

  get form() {
    return this.$form;
  }

  get originValue() {
    return this.origin.value;
  }

  get destinationValue() {
    return this.destination.value;
  }

  get departDateValue() {
    return this.depart.toString();
  }

  get returnDateValue() {
    return this.return.toString();
  }

  setAutocompleteData(data) {
    this.originAutocomplete.updateData(data);
    this.destinationAutocomplete.updateData(data);
  }
}

const formUI = new FormUi(getAutocompleteInstance, getDatePickerInstance);

export default formUI;
