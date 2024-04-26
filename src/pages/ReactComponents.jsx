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
      <div class="border-start border-5 border-success">
        <div class="m-5">
          <p>
            <h2>Component Props</h2>Any HTML element sttribute is a prop, we can use it in the component as
            <ul>
              <li>
                <strong>props.title</strong> or
              </li>
              <li>
                destructure it as <strong>variable</strong>
              </li>
            </ul>
            We can also pass the props as JSON object to the custom component.
          </p>
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
      <div class="border-start border-5 border-success">
        <div class="m-5">
          <p>
            <h2>Component Composition</h2>Any HTML between your custom component tags is available in props as children so you can do
            <ul>
              <li>
                <strong>props.childred</strong> or
              </li>
              <li>
                destructure it as <strong>variable</strong>
              </li>
            </ul>
          </p>
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
