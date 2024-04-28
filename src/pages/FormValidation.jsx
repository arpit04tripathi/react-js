import { useLocation } from "react-router-dom";

const FormValidation = () => {
  const query = new URLSearchParams(useLocation().search);
  console.log(`query params : ${query}`);

  return (
    <div id="validate-forms">
      <div id="router-params">
        <div className="row">
          <div className="col">
            <pre>{JSON.stringify(process.env, null, 2)}</pre>
          </div>
          <div className="col">
            <pre>{JSON.stringify(query, null, 2)}</pre>
            <p>PARAMS = {query.get("name")}</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default FormValidation;
