import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { getCountries } from "react-country-phone-input";

const CountryPhoneInputForm = () => {
	const [value, setValue] = useState();

	return (
		<div id="react-phone-number-input">
			<PhoneInput placeholder="Enter phone number" value={value} onChange={setValue} />
			<div><pre>{JSON.stringify(getCountries, null, 2)}</pre></div>
		</div>
	);
};

export default CountryPhoneInputForm;
