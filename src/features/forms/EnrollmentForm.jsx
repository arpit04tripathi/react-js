import { useState } from "react";
import { getCountries } from "react-phone-number-input";

const countries = [
	{
		code: "US",
		name: "USA",
	},
	{
		code: "IND",
		name: "India",
	},
	{
		code: "GB",
		name: "United Kingdom",
	},
];

const c = getCountries();
const allAllowedPhoneTypes = [
	{ value: "cell", name: "Cell Phone" },
	{ value: "home", name: "Home Phone" },
	{ value: "work", name: "Work Phone" },
];

function EnrollmentForm() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		contacts: [
			{
				countryCode: "US",
				phone: "1234567890",
				type: "home",
			},
		],
		termsAgreed: false,
	});
	const [errors, setErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);

	const handleInputChange = (e) => {
		console.log(e);
		let { name, value } = e.target;
		if (e.target.type === "checkbox") {
			value = e.target.checked;
		}

		setFormData({
			...formData,
			[name]: value,
		});

		delete errors[name];
		setErrors({ ...errors });
	};

	const handleInputChangeForContacts = (index, e) => {
		const { name, value } = e.target;
		let contact = formData.contacts[index];
		contact[name] = value;
		console.log(contact);
		setFormData({
			...formData,
		});

		console.log(formData.contacts);
	};

	const addContact = () => {
		if (formData.contacts.length < 3) {
			formData.contacts.push({
				countryCode: "US",
				phone: "4684",
				type: "cell",
			});

			setFormData({
				...formData,
			});
		}
	};

	const removeContact = (index) => {
		const contacts = formData.contacts;
		console.log(index);
		console.log(contacts);
		contacts.splice(index, 1);
		formData.contacts = contacts;

		setFormData({
			...formData,
		});
	};

	const validateForm = () => {
		let isValid = true;
		const newErrors = {};
		isValid = validateFirstAndLastName(newErrors) && isValid;
		isValid = validateEmail(newErrors) && isValid;
		isValid = validateContacts(newErrors) && isValid;
		isValid = validateTermsAgreed(newErrors) && isValid;
		setErrors(newErrors);
		return isValid;
	};

	const validateFirstAndLastName = (newErrors) => {
		let isValid = true;
		// Validate firstName
		if (!formData.firstName) {
			newErrors.firstName = "firstName is required";
			isValid = false;
		}

		// Validate latName
		if (!formData.lastName) {
			newErrors.lastName = "lastName is required";
			isValid = false;
		}
		return isValid;
	};
	const validateEmail = (newErrors) => {
		// Validate email
		if (!formData.email) {
			newErrors.email = "email is required";
			return false;
		}
		return true;
	};

	const validateTermsAgreed = (newErrors) => {
		// Validate termsAgreed
		if (!formData.termsAgreed) {
			newErrors.termsAgreed = "termsAgreed is required";
			return false;
		}
		return true;
	};

	const validateContacts = (newErrors) => {
		const CONTACTS_ERROR_EMPTY = [{}, {}, {}];
		newErrors.contacts = CONTACTS_ERROR_EMPTY;
		const selectedPhoneTypes = new Set([]);
		formData.contacts.map((contact, index) => {
			if (index > 0 && (formData.contacts!==contact.countryCode)) {
				newErrors.contacts[index].countryCode = `Can select only one country code.`
			}

			if (contact.phone === "") {
				newErrors.contacts[index].phone = "Phone Number cannot be empty"
			}

			selectedPhoneTypes.add(contact.type);
			if(selectedPhoneTypes.has(contact.type)) {newErrors.contacts[index].type = `Only one phone number allowed of type ${contact.type}`}
			console.log(index, contact);
		})
		console.log(newErrors);
		console.log(newErrors.contacts);
		if(CONTACTS_ERROR_EMPTY === newErrors.contacts) {
			delete newErrors.contacts;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (validateForm()) {
			// Form is valid, you can submit or process the data here
			console.log("Form data:", formData);
			setSubmitted(true); // Set a submitted flag
		} else {
			// Form is not valid, display error messages
		}
	};

	const isFormValid = () => Object.keys(errors).length === 0;

	return (
		<div id="enrollment-form">
			<div className="row">
				<div className="col">
					errors : <pre>{JSON.stringify(errors, null, 2)}</pre>
				</div>
				<div className="col">
					formData : <pre>{JSON.stringify(formData, null, 2)}</pre>
				</div>
			</div>
			<div>{c}</div>
			<form className="row g-3" noValidate>
				{/* row - name */}
				<div className="col-md-6">
					<label htmlFor="firstName" className="form-label">
						First name
					</label>
					<input
						type="text"
						className={`form-control ${errors.firstName && "is-invalid"}`}
						id="firstName"
						name="firstName"
						onChange={handleInputChange}
						required
					/>
					<div className="invalid-feedback">{errors.firstName}</div>
				</div>
				<div className="col-md-6">
					<label htmlFor="lastName" className="form-label">
						Last name
					</label>
					<input
						type="text"
						className={`form-control ${errors.lastName && "is-invalid"}`}
						id="lastName"
						name="lastName"
						onChange={handleInputChange}
						required
					/>
					<div className="invalid-feedback">{errors.lastName}</div>
				</div>
				{/* row - email */}
				<div className="col-md-12 mb-4">
					<label htmlFor="email" className="form-label">
						Email
					</label>
					<div className="input-group has-validation">
						<span className="input-group-text" id="inputGroupPrepend">
							@
						</span>
						<input
							type="text"
							className={`form-control ${errors.email && "is-invalid"}`}
							id="email"
							name="email"
							aria-describedby="inputGroupPrepend"
							onChange={handleInputChange}
							required
						/>
						<div className="invalid-feedback">Please enter a valid email.</div>
					</div>
				</div>

				{/* row - phone numbers */}
				{formData.contacts.map((item, rowIndex) => {
					return (
						<div className="row" key={"row-" + rowIndex}>
							<div className="col-md-2">
								<label htmlFor="validationCustom04" className="form-label">
									Country
								</label>
								<select
									className="form-select"
									id={`countryCode-${rowIndex}`}
									name="countryCode"
									defaultValue={"US"}
									onChange={(e) => handleInputChangeForContacts(rowIndex, e)}
									required>
									{countries.map((country, countryIndex) => {
										return (
											<option key={rowIndex + "-" + countryIndex} value={country.code}>
												{country.name} - {country.code}
											</option>
										);
									})}
								</select>
								<div className="invalid-feedback">Please select a valid state.</div>
							</div>
							<div className="col-md-6">
								<label htmlFor="validationCustom03" className="form-label">
									Phone
								</label>
								<input
									type="number"
									className="form-control"
									id={`phone-${rowIndex}`}
									index={rowIndex}
									defaultValue={item.phone}
									name="phone"
									onChange={(e) => handleInputChangeForContacts(rowIndex, e)}
									required
								/>
								<div className="invalid-feedback">Please provide a valid phone.</div>
							</div>
							<div className="col-md-3">
								<label htmlFor={`phoneType-${rowIndex}`} className="form-label">
									Type
								</label>
								<select className="form-select" id={`phoneType-${rowIndex}`} name="type" onChange={(e) => handleInputChangeForContacts(rowIndex, e)} required>
									{allAllowedPhoneTypes.map((phoneType, phoneTypeIndex) => {
										return (
											<option key={`${rowIndex}-${phoneTypeIndex}`} value={phoneType.value}>
												{phoneType.name}
											</option>
										);
									})}
								</select>
								<div className="invalid-feedback">Please provide a type.</div>
							</div>
							<div className="col-md-1">
								<label htmlFor={`button-${rowIndex}`} className="form-label"></label>
								<p id={`button-${rowIndex}`}>
									{rowIndex === 0 ? (
										<i className="bi bi-plus-circle" onClick={addContact} />
									) : (
										<i className="bi bi-x-circle" onClick={(e) => removeContact(rowIndex)} />
									)}
								</p>
							</div>
						</div>
					);
				})}

				{/* row - terms and condition */}
				<div className="col-12">
					<div className="form-check">
						<input
							className={`form-check-input ${errors.termsAgreed && "is-invalid"}`}
							type="checkbox"
							checked={formData.termsAgreed}
							id="termsAgreed"
							name="termsAgreed"
							onChange={handleInputChange}
							required
						/>
						<label className="form-check-label" htmlFor="termsAgreed">
							Agree to terms and conditions
						</label>
						<div className="invalid-feedback">You must agree before submitting.</div>
					</div>
				</div>
				<div className="col-12">
					<button className="btn btn-primary" type="submit" disabled={!isFormValid} onClick={handleSubmit}>
						Submit form
					</button>
				</div>
			</form>
		</div>
	);
}

export default EnrollmentForm;
