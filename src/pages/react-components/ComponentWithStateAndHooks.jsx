import { useState } from "react";
import AccordionItem from "../../components/AccordionItem";
import Input from "../../components/Input";
import {HomeIcon, PlusIcon} from '../../components/icons';
import Button from '../../components/Button';

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
            <code>onClick</code> user events to update state and display updated stae var.
          </li>
          <li>
            Conditional rendering using <code>(var && "html_var")</code> or ternary <code>(var ? "html_var" : "")</code>
          </li>
          <li>
            Conditionally add class based on state or prop using <code>className</code>
          </li>
          <li>
            React component can only return one element so we end up having an extra <code>div</code> in DOM for each component. This can be resolved by using{" "}
            <code>Fragment</code> element as root as root element in components instead of div. OR use an <code>empty tag</code> as root element for the
            component jsx.
          </li>
          <li>
            Forwarding props to Wrapped elements, we can first destructure <code>...props</code> in the component function and then add <code>...props</code> on
            the root element to forward the destructured props including event handlers like <code>onClick</code>
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
        <AccordionItem itemId="Five" parentId="accordionExample" heading="Forwarding props to Wrapped elements">
          <div id="content">
            <Input type="text" placeholder="Your name" />
            <Input type="text" value="Pre-filled as Arpit" placeholder="Your name" />
            <Input richText placeholder="Your message" />
          </div>
        </AccordionItem>
        <AccordionItem itemId="Six" parentId="accordionExample" heading="Creating Flexible Components">
          <section>
            <h2>Filled Button (Default)</h2>
            <p>
              <Button>Default</Button>
            </p>
            <p>
              <Button mode="filled">Filled (Default)</Button>
            </p>
          </section>
          <section>
            <h2>Button with Outline</h2>
            <p>
              <Button mode="outline">Outline</Button>
            </p>
          </section>
          <section>
            <h2>Text-only Button</h2>
            <p>
              <Button mode="text">Text</Button>
            </p>
          </section>
          <section>
            <h2>Button with Icon</h2>
            <p>
              <Button Icon={HomeIcon}>Home</Button>
            </p>
            <p>
              <Button Icon={PlusIcon} mode="text">
                Add
              </Button>
            </p>
          </section>
          <section>
            <h2>Buttons Should Support Any Props</h2>
            <p>
              <Button mode="filled" disabled>
                Disabled
              </Button>
            </p>
            <p>
              <Button onClick={() => console.log("Clicked!")}>Click me</Button>
            </p>
          </section>
        </AccordionItem>

        <div>
          <pre>{JSON.stringify(process.env, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};
export default ComponentWithStateAndHooks;


