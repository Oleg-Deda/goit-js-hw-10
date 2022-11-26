import './css/styles.css';
import fetchCountries from './fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const inputValue = document.querySelector('#search-box');
const countriesList = document.querySelector('.country-list');
const countryCard = document.querySelector('.country-info');

function onSearch(evt) {
  const searchValue = evt.target.value.trim();
  countriesList.innerHTML = '';
  countryCard.innerHTML = '';

  if (!searchValue) {
    return;
  }

  fetchCountries(searchValue).then(country =>
    console.log(country)
    if (country.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
    return;
  }

          countriesList.innerHTML = renderCountriesList(country);

  }).catch
    (err => Notify.failure('Oops, there is no country with that name'));
  }
inputValue.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));
function renderCountriesList(arr) {
  if (arr.length ===1) {
   countryCard.innerHTML =  arr
    .map(country => { console.log(country)
      return `
   <img class="country_svg" src="${country.flags.svg}" alt="${country.name}" width=40"">
   <h2>${country.name.official}</h2>
   <p class="country_text">Capital:${Country.capital}</p>
   <p class="country_text">Population:${Country.population}</p>
   <p class="country_text">Languages:${Object.values(country.languages)}</p>`;
    })
    .join('');

return arr
  .map(country => {
    console.log(country);
      return `<li class="country_item">
    <img class="country_svg" src="${country.flags.svg}" alt="${country.name}" width=40"">
   <h2>${country.name.official}</h2>
   </li>`;
    })
    .join('');
