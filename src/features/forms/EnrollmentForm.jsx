import { useState } from "react";

function EnrollmentForm() {
  const allAllowedPhoneTypes = ["cell", "home", "work"];
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: [
      {
        countryCode: "",
        phone: "",
        type: "",
      },
    ],
    termsAgreed: false,
  });

  return (
    <div id="enrollment-form">
      <a
        href="https://getbootstrap.com/docs/5.0/forms/validation/"
        target="_blank"
        rel="noopener noreferrer"
      >bootstrap5 validation</a>
      Enrollment Form
    </div>
  );
}

export default EnrollmentForm;
