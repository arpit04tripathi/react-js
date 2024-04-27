import logo from "../assets/logo.svg";
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
      <div>
        <p>Changing text - [{reactDescription[getRandomInt()]}]</p>
        <p>
          image as import <img src={logo} alt="logo here" width="50rem" />
        </p>
      </div>
      <div className="border-start border-5 border-success">
        <div className="m-5">
          <h2>Component Props</h2>

          <ul>
            <p>Any HTML element sttribute is a prop, we can use it in the component as</p>
            <li>
              <strong>props.title</strong> or
            </li>
            <li>
              destructure it as <strong>variable</strong>
            </li>
            <p>We can also pass the props as JSON object to the custom component.</p>
          </ul>
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
      <div className="border-start border-5 border-success">
        <div className="m-5">
          <h2>Component Composition</h2>
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
          <div>
            <i>
              italic child displayed with <strong>children</strong> property which is present in props
            </i>
          </div>
        </ComponentPropsWithChildren>
        <ComponentPropsDestructuredWithChildren title="React JS">
          <i>
            italic child displayed with <strong>children</strong> property which is present in props
          </i>
        </ComponentPropsDestructuredWithChildren>
      </div>
    </div>
  );
}

export default ReactComponents;
