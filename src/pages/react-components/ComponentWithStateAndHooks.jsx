import { useState } from "react";
import AccordionItem from "../../components/AccordionItem";

const ComponentWithStateAndHooks = () => {
  let [count, setCount] = useState(0);
  const [isError, SetIsError] = useState(false);
  const [active, setActive] = useState(false);
  const DUMMY_TODOS = ["Learn React", "Practice React", "Profit!"];
  const DUMMY_JSON_TODOS = [
    { name: "Learn React", order: "A" },
    { name: "Practice React", order: "B" },
    { name: "Profit!", order: "C" },
  ];

  let modal = (
    <div data-testid="alert" id="alert" className="border border-4 rounded-5 p-5">
      <h2>Are you sure?</h2>
      <p>These changes can't be reverted!</p>
      <button className="btn btn-primary" onClick={() => SetIsError(false)}>
        Proceed
      </button>
    </div>
  );

  return (
    <div id="component-state" className="m-3">
      <header className="bg-dark text-white rounded-1 p-3 mb-3">
        <h1>Component State</h1>
        <hr />
        <ul>
          <li>
            Component State using hook <code>let [count, setCount] = useState(0)</code>
          </li>
          <li>
            <code>onClick</code> actions to update state and display updated stae var.
          </li>
          <li>
            Conditional rendering using <code>(var && "html_var")</code> or ternary <code>(var ? "html_var" : "")</code>
          </li>
          <li>
            Conditionally add class based on state or prop using <code>className</code>
          </li>
        </ul>
      </header>
      <div className="accordion" id="accordionExample">
        <AccordionItem itemId="One" parentId="accordionExample" heading="useState Hook and onClick" show>
          <span>
            <button className="btn btn-success btn-lg" onClick={() => setCount(++count)}>
              Click for update count
            </button>{" "}
            | Count is {count}
          </span>
        </AccordionItem>
        <AccordionItem itemId="Two" parentId="accordionExample" heading="Conditional show Error Modal using html as var">
          <div className="row">
            <div className="col-2">
              <button className="btn btn-danger" onClick={() => SetIsError(true)}>
                Delete
              </button>
            </div>
            <div className="col-3">{isError && modal}</div>
          </div>
        </AccordionItem>
        <AccordionItem itemId="Three" parentId="accordionExample" heading="Conditional css class assign using className">
          <div>
            <p className={active ? "active" : ""}>
              Style me! <code>{active ? "active" : ""}</code>
            </p>
            <button className="btn btn-primary" onClick={() => setActive(!active)}>
              Toggle style
            </button>
          </div>
        </AccordionItem>
        <AccordionItem itemId="Four" parentId="accordionExample" heading="Output Array Dynamically">
          <ul>
            {DUMMY_TODOS.map((item, index) => (
              <li key={index}>
                {item} - {item}
              </li>
            ))}
          </ul>
          <ul>
            {DUMMY_JSON_TODOS.map((item, index) => (
              <li key={index}>
                {index} - {item.order} - {item.name}
              </li>
            ))}
          </ul>
        </AccordionItem>
        <div>
          <pre>{JSON.stringify(process.env, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};
export default ComponentWithStateAndHooks;
