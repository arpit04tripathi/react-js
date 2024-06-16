import { ACCORDION_PARENT } from "../../data/constants";
import AccordionItem from "../../components/AccordionItem";

function EnvBasics() {
  return (
    <div id="env-basics">
      <header className="bg-dark text-white rounded-1 p-3 mb-3">
        <h1>Env Basics</h1>
        <hr />
        <ul>
          <li>env variables</li>
        </ul>
      </header>
      <div className="accordion" id={ACCORDION_PARENT}>
        <AccordionItem
          itemId="env-json"
          parentId={ACCORDION_PARENT}
          heading="env as json"
          show
        >
          <strong>process.env</strong>
          <pre>{JSON.stringify(process.env, null, 2)}</pre>
        </AccordionItem>
      </div>
    </div>
  );
}

export default EnvBasics;
