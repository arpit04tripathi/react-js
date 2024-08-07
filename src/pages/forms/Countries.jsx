import AccordionItem from "../../components/AccordionItem";
import React, { useState, useEffect } from "react";
import { getAllCountries, getAllStatesAsync } from "react-country-list";
import ReactCountryFlag from "react-country-flag";
import { PhoneInput } from "react-country-phone-input";
import CountryPhoneInputForm from "../../features/forms/countries/CountryPhoneInputForm";

const Countries = () => {
  const [country, setCountry] = useState("");
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  useEffect(() => {
    const countries = getAllCountries();
    setCountryList(countries);
  }, []);
  useEffect(() => {
    const states = getAllStatesAsync(country);
    setStateList(states);
  }, [country]);
  const handleCountrySelect = (value) => {
    setCountry(value);
  };

  const listOfReferences = [
    {
      label: "react-phone-number-input",
      link: "https://www.npmjs.com/package/react-phone-number-input",
      available: true,
    },
    {
      label: "react-country-flag",
      link: "https://www.npmjs.com/package/react-country-flag",
    },
    {
      label: "react-country-list",
      link: "https://www.npmjs.com/package/react-country-list",
    },
    {
      label: "react-country-phone-input",
      link: "https://www.npmjs.com/package/react-country-phone-input",
    },
  ];

  return (
    <div id="countries">
      <h1>Countries</h1>
      <div className="accordion" id="accordionExample">
        <AccordionItem
          itemId="Three"
          parentId="accordionExample"
          heading="Other Libraries available"
          show
        >
          <ul>
            {listOfReferences.map(({ label, link, available }) => (
              <li key={label}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
                {available && <span> approved</span>}
              </li>
            ))}
          </ul>
        </AccordionItem>
        <AccordionItem
          itemId="Two"
          parentId="accordionExample"
          heading="react-country-flag"
        >
          <div>
            <ReactCountryFlag countryCode="US" />

            <ReactCountryFlag
              className="emojiFlag"
              countryCode="US"
              style={{
                fontSize: "2em",
                lineHeight: "2em",
              }}
              aria-label="United States"
            />

            <ReactCountryFlag countryCode="US" svg />

            <ReactCountryFlag
              countryCode="US"
              svg
              style={{
                width: "2em",
                height: "2em",
              }}
              title="US"
            />

            <ReactCountryFlag
              countryCode="US"
              svg
              cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
              cdnSuffix="svg"
              title="US"
            />
          </div>
        </AccordionItem>
        <AccordionItem
          itemId="One"
          parentId="accordionExample"
          heading="List of react-country-list"
        >
          <div>
            <select>
              <option>select country</option>
              {countryList.map((country) => {
                return (
                  <option key={country.name} onSelect={handleCountrySelect}>
                    {country.name}
                  </option>
                );
              })}
            </select>
            <p>selected country : {country}</p>
          </div>
          <div>
            <ul>
              {getAllCountries().map((country) => {
                return (
                  <li key={country.id} >
                    {country.id} - {country.name} - {country.phone_code}
                  </li>
                );
              })}
            </ul>
            <pre>{JSON.stringify(getAllCountries()[101], null, 2)}</pre>
          </div>
        </AccordionItem>
        <AccordionItem
          show
          itemId="accordion-country-phone-input"
          parentId="accordionExample"
          heading="react-phone-number-input"
        >
          <CountryPhoneInputForm/>
        </AccordionItem>        
      </div>
    </div>
  );
};
export default Countries;
