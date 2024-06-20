import AccordionItem from "../../components/AccordionItem";
import EnrollmentForm from "../../features/forms/EnrollmentForm";

const FormValidation = () => {

  return (
    <div id="validate-forms">
      <div className="accordion" id="accordionExample">
        <AccordionItem itemId="Two" parentId="accordionExample" heading="Enrollment Form" show>
          <EnrollmentForm />
        </AccordionItem>
      </div>
    </div>
  );
};

export default FormValidation;
