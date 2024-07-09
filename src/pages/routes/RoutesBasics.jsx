import { useLocation, useSearchParams } from "react-router-dom";
import { ACCORDION_PARENT } from "../../data/constants";
import AccordionItem from "../../components/AccordionItem";

function RoutesBasics() {
  const query = new URLSearchParams(useLocation().search);
  console.log(`query params : ${query}`);

  const [searchParams, setSearchParams] = useSearchParams();
  const params = [];
  searchParams.forEach((value, key) => {
    params.push([key, value]);
  });
  console.log(params); // [["page", 5], ["pageSize", 25]]

  return (
    <div id="routes-basics">
      <header className="bg-dark text-white rounded-1 p-3 mb-3">
        <h1>Routes Basics</h1>
        <hr />
        <ul>
          <li>routes and params</li>
        </ul>
      </header>
      <div className="accordion" id={ACCORDION_PARENT}>
        <AccordionItem
          itemId="query-string"
          parentId={ACCORDION_PARENT}
          heading="Route - Query String"
          show
        >
          <pre>
            <strong>query (json string)</strong>:{" "}
            {JSON.stringify(query, null, 2)}
          </pre>
        </AccordionItem>
        <AccordionItem
          itemId="all-query-params"
          parentId={ACCORDION_PARENT}
          heading="Route - Query Params"
        >
          <p>
            <strong>List all query params</strong> :
            <ul>
              {params.map(([key, value]) => (
                <li key={key}>
                  {key} : {value}
                </li>
              ))}
            </ul>
          </p>
        </AccordionItem>
        <AccordionItem
          itemId="specific-query-param"
          parentId={ACCORDION_PARENT}
          heading="Route - Specific Query Param"
        >
          <p>
            <strong>query param "name"</strong> = {query.get("name")}
          </p>
        </AccordionItem>
      </div>
    </div>
  );
}

export default RoutesBasics;
