import React from 'react';
import { Link } from 'react-router';
import CountryFlag from './flag.component';

const CountryFlagList = (props) => (
  <div className="countries-list">
    { props.countries.map(country => {
      return (
        <div className="single-country" key={country.id}>
          <Link className='country-logo' to={'countries/country/' + country.id}>
            <CountryFlag country={country} />
            <h2 className='country-name'>{country.name}</h2>
          </Link>
          <button
            className='button'
            onClick={props.deleteCountry.bind(null, country.id)}>
            DELETE
          </button>
        </div>
      )
    })}
  </div>
);

export default CountryFlagList;