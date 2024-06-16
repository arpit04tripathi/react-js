import AccordionItem from "../../components/AccordionItem";
import RegistrationForm from "../../features/forms/RegisterationForm";

const FormValidation = () => {

  return (
    <div id="validate-forms">
      <div className="accordion" id="accordionExample">
        <AccordionItem itemId="Two" parentId="accordionExample" heading="Registration Form">
          <RegistrationForm />
        </AccordionItem>
      </div>
    </div>
  );
};

export default FormValidation;
