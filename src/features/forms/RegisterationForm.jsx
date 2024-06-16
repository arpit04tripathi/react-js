import { useState } from "react";

const RegisterationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    latName: "",
    username: "",
    city: "",
    state: "",
    zip: "",
    termsAgreed: false
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  // const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
    delete errors[name];
    setErrors({...errors})
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate firstName
    if (!formData.firstName) {
      newErrors.firstName = "firstName is required";
      isValid = false;
    }

    // Validate latName
    if (!formData.latName) {
      newErrors.latName = "latName is required";
      isValid = false;
    }

    // Validate username
    if (!formData.username) {
      newErrors.username = "username is required";
      isValid = false;
    }

    // Validate city
    if (!formData.city) {
      newErrors.city = "city is required";
      isValid = false;
    }

    // Validate state
    if (!formData.state) {
      newErrors.state = "state is required";
      isValid = false;
    }

    // Validate zip
    if (!formData.zip) {
      newErrors.zip = "zip is required";
      isValid = false;
    }

    // Validate termsAgreed
    if (!formData.termsAgreed) {
      newErrors.termsAgreed = "termsAgreed is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
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

  const isFormValid = Object.keys(errors).length === 0;
  
  return (
    <div id="registration-form">
      <h1>Registration Form</h1>
      <div className="row">
      <div className="col">errors : <pre>{JSON.stringify(errors, null, 2)}</pre></div>
      <div className="col">formData : <pre>{JSON.stringify(formData, null, 2)}</pre></div>
      </div>
      
      
      <form className="row g-3 needs-validation" noValidate>
        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">
            First name
          </label>
          <input type="text" className="form-control" id="validationCustom01" placeholder="Mark" name="firstName" onChange={handleInputChange} required />
          <div className="valid-feedback">Looks good!</div>
          {errors.firstName && <div className="error">{errors.firstName}</div>}
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom02" className="form-label">
            Last name
          </label>
          <input type="text" className="form-control" id="validationCustom02" placeholder="Otto" name="latName" onChange={handleInputChange} required />
          <div className="valid-feedback">Looks good!</div>
          {errors.latName && <div className="error">{errors.latName}</div>}
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustomUsername" className="form-label">
            Username
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              @
            </span>
            <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" name="username" onChange={handleInputChange} required />
            <div className="invalid-feedback">Please choose a username.</div>
            {errors.username && <div className="error">{errors.username}</div>}
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom03" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="validationCustom03" name="city" onChange={handleInputChange} required />
          <div className="invalid-feedback">Please provide a valid city.</div>
          {errors.city && <div className="error">{errors.city}</div>}
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom04" className="form-label">
            State
          </label>
          <select className="form-select" id="validationCustom04" name="state" onChange={handleInputChange} required>
            <option selected disabled value="">
              Choose...
            </option>
            <option>...</option>
          </select>
          <div className="invalid-feedback">Please select a valid state.</div>
          {errors.state && <div className="error">{errors.state}</div>}
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom05" className="form-label">
            Zip
          </label>
          <input type="text" className="form-control" id="validationCustom05" name="zip" onChange={handleInputChange} required />
          <div className="invalid-feedback">Please provide a valid zip.</div>
          {errors.zip && <div className="error">{errors.zip}</div>}
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" name="termsAgreed" onChange={handleInputChange} required />
            <label className="form-check-label" htmlFor="invalidCheck">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">You must agree before submitting.</div>
            {errors.termsAgreed && <div className="error">{errors.termsAgreed}</div>}
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
};

export default RegisterationForm;
