import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import Input from "react-phone-number-input/input";
import PropTypes from "prop-types";
import { getCountries, getCountryCallingCode,  } from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en";

const CountryPhoneInputForm = () => {
	const [value, setValue] = useState();

	const inputChange = (e) => {
		console.log("inputChange", e);
		setValue(e);
	};

	const CountrySelect = ({ value, onChange, labels, ...rest }) => (
		<select {...rest} value={value} onChange={(event) => onChange(event.target.value || undefined)}>
			<option value="">{labels["ZZ"]}</option>
			{getCountries().map((country) => {
				console.log('country - ', country)
				return (<option key={country} value={country}>
					<img class="PhoneInputCountryIconImg" alt={labels[country]} src="https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"></img> {labels[country]} +{getCountryCallingCode(country)}
				</option>)
			})}
		</select>
	);

	CountrySelect.propTypes = {
		value: PropTypes.string,
		onChange: PropTypes.func.isRequired,
		labels: PropTypes.objectOf(PropTypes.string).isRequired,
	};

	const [country, setCountry] = useState();

	return (
		<div id="react-phone-number-input">
			{/* <img class="PhoneInputCountryIconImg" alt="USA" src="https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"></img> */}
			<div>
				<h1>Default</h1>
				<PhoneInput
					placeholder="Enter phone number"
					international
					countryCallingCodeEditable={false}
					defaultCountry="ZA"
					value={value}
					onChange={inputChange}
					error={value ? (isValidPhoneNumber(value) ? undefined : "Invalid phone number") : "Phone number required"}
				/>
			</div>
			<hr />
			<div>
				<h1>Custom input</h1>
			</div>
			<hr />
			<div>
				<h1>Adding Country Select</h1>
				<CountrySelect labels={en} value={country} onChange={setCountry} />
			</div>
			{/* <div>
				<pre>{JSON.stringify(getCountries, null, 2)}</pre>
			</div> */}
		</div>
	);
};

export default CountryPhoneInputForm;
