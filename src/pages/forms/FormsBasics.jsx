import { ACCORDION_PARENT } from "../../data/constants";
import AccordionItem from "../../components/AccordionItem";
import RegistrationForm from "../../features/forms/RegisterationForm";

function FormsBasics() {
  return (
    <div id="forms-basics">
      <header className="bg-dark text-white rounded-1 p-3 mb-3">
        <h1>Forms Basics</h1>
        <hr />
        <ul>
          <li>
            Forms (<code>react</code>)
          </li>
        </ul>
      </header>
      <div className="accordion" id={ACCORDION_PARENT}>
        <AccordionItem
          itemId="get-random"
          parentId={ACCORDION_PARENT}
          heading="Axios - GET from jsonplaceholder (PUBLIC API)"
          show
        >
          <RegistrationForm />
        </AccordionItem>
        <AccordionItem
          itemId="Three"
          parentId={ACCORDION_PARENT}
          heading="Others"
        >
          <p>Other items for axios here</p>
        </AccordionItem>
      </div>
    </div>
  );
}

export default FormsBasics;
