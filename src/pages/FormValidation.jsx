import { useLocation, useSearchParams } from "react-router-dom";
import AccordionItem from "../components/AccordionItem";
import RegistrationForm from "../features/RegisterationForm";
import OTPVerificationForm from "../features/OTPVerificationForm";

const FormValidation = () => {
  const query = new URLSearchParams(useLocation().search);
  console.log(`query params : ${query}`);

  const [searchParams, setSearchParams] = useSearchParams();
  const params = [];
  searchParams.forEach((value, key) => {
    params.push([key, value]);
  });
  console.log(params); // [["page", 5], ["pageSize", 25]]

  return (
    <div id="validate-forms">
      <div className="accordion" id="accordionExample">
        <AccordionItem itemId="One" parentId="accordionExample" heading="Import Images and Text Randomization" show>
          <div id="router-params">
            <div className="row">
              <div className="col">
                <strong>process.env</strong>
                <pre>{JSON.stringify(process.env, null, 2)}</pre>
              </div>
              <div className="col">
                <pre><strong>query (json string)</strong>: {JSON.stringify(query, null, 2)}</pre>
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
                <p><strong>query param "name"</strong> = {query.get("name")}</p>
              </div>
            </div>
          </div>
        </AccordionItem>
        <AccordionItem itemId="Two" parentId="accordionExample" heading="Registration Form">
          <RegistrationForm />
        </AccordionItem>
        <AccordionItem itemId="Three" parentId="accordionExample" heading="OTP Verification Form">
          <OTPVerificationForm />
        </AccordionItem>
      </div>
    </div>
  );
};

export default FormValidation;
