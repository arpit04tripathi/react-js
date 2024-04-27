import logo from "../assets/logo.svg";
import AccordionItem from "../components/AccordionItem";
import {
  ComponentProps,
  ComponentPropsDestructured,
  ComponentPropsWithChildren,
  ComponentPropsDestructuredWithChildren,
} from "../features/react-components/PassingComponentProps";

const reactDescription = ["Fundamental", "Crucial", "Core", "Advanced", "Basic", "Intermediate"];
const getRandomInt = () => Math.floor(Math.random() * reactDescription.length);
const PROPS_JSON = { title: "React JS", description: "A new course with props as JSON" };

function ReactComponents() {
  return (
    <div id="react-coponents">
      <div></div>
      <div className="accordion" id="accordionExample">
        <AccordionItem itemId="One" parentId="accordionExample" heading="Import Images and Text Randomization" show>
          <p>Changing text - [{reactDescription[getRandomInt()]}]</p>
          <p>
            image as import <img src={logo} alt="logo here" width="50rem" />
          </p>
        </AccordionItem>
        <AccordionItem itemId="Two" parentId="accordionExample" heading="Component Props">
          <div className="border-start border-5 border-success">
            <div className="m-5">
              <p>Any HTML element sttribute is a prop, we can use it in the component as</p>
              <ul>
                <li>
                  <strong>props.title</strong> or
                </li>
                <li>
                  destructure it as <strong>variable</strong>
                </li>
              </ul>
              <p>We can also pass the props as JSON object to the custom component.</p>
            </div>
            <ComponentProps title="React JS" description="A new course with props as HTML attributes">
              <i>italic child not displayed</i>
            </ComponentProps>
            <ComponentProps {...PROPS_JSON}>
              <i>italic child not displayed</i>
            </ComponentProps>
            <ComponentPropsDestructured title="React JS" description="A new course">
              <i>italic child not displayed</i>
            </ComponentPropsDestructured>
          </div>
        </AccordionItem>
        <AccordionItem itemId="Three" parentId="accordionExample" heading="Component Composition">
          <div className="border-start border-5 border-success">
            <div className="m-5">
              <p>Any HTML between your custom component tags is available in props as children so you can do</p>
              <ul>
                <li>
                  <strong>props.childred</strong> or
                </li>
                <li>
                  destructure it as <strong>variable</strong>
                </li>
              </ul>
            </div>

            <ComponentPropsWithChildren title="React JS" description="A new course">
              <i>
                italic child displayed with <strong>children</strong> property which is present in props
              </i>
            </ComponentPropsWithChildren>
            <ComponentPropsDestructuredWithChildren title="React JS">
              <i>
                italic child displayed with <strong>children</strong> property which is present in props
              </i>
            </ComponentPropsDestructuredWithChildren>
          </div>
        </AccordionItem>
      </div>
    </div>
  );
}

export default ReactComponents;
