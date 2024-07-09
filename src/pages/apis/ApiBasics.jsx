import { ACCORDION_PARENT } from "../../data/constants";
import AccordionItem from "../../components/AccordionItem";
import GetRandomPost from "../../features/apis/basics/GetRandomPost";

function ApiBasics() {
  return (
    <div id="api-basics">
      <header className="bg-dark text-white rounded-1 p-3 mb-3">
        <h1>API Basics</h1>
        <hr />
        <ul>
          <li>
            Common library (<code>axios</code>)
            <a
              href="https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </li>
          <li>
            Free Public APIs
            <a
              href="https://medium.com/@hrishikesh.pandey9955/free-public-apis-for-developers-183230b18b90"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </li>
          <li>
            API used below - jsonplaceholder
            <a
              href="https://jsonplaceholder.typicode.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
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
          <GetRandomPost />
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

export default ApiBasics;
