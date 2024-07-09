const AccordionItem = ({children, parentId, itemId, heading, show=false}) => {
  const collapseId = "collapse" + itemId;
  const collapseClass = "accordion-collapse collapse "+ (show ? "show" : "");
  // console.log(`show Flag : ${show}, class : ${collapseClass}`);

  return (<div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className={`accordion-button ${!show && " collapsed"}`}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={"#" + collapseId}
        aria-expanded="true"
        aria-controls={collapseId}
      >
        {heading}
      </button>
    </h2>
    <div id={collapseId} className={collapseClass} data-bs-parent={"#" + parentId}>
      <div className="accordion-body">{children}</div>
    </div>
  </div>);
};

export default AccordionItem;