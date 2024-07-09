import AccordionItem from "../../components/AccordionItem";
import EnrollmentForm from "../../features/forms/EnrollmentForm";

const FormValidation = () => {
  return (
    <div id="validate-forms">
      <header className="bg-dark text-white rounded-1 p-3 mb-3">
        <h1>Form Validation</h1>
        <hr />
        <ul>
          <li>
            Read more about{" "}
            <a
              href="https://getbootstrap.com/docs/5.0/forms/validation/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bootstrap 5 form validation
            </a>{" "}
            <code>no library</code>
          </li>
        </ul>
      </header>
      <div className="accordion" id="accordionExample">
        <AccordionItem
          itemId="Two"
          parentId="accordionExample"
          heading="Enrollment Form"
          show
        >
          <EnrollmentForm />
        </AccordionItem>
      </div>
    </div>
  );
};

export default FormValidation;
