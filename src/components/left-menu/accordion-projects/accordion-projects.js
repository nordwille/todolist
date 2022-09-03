import "./accordion-projects.css";

const AccordionProjects = () => {
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <div
          className="accordion-button collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-controls="collapseTwo"
        >
          <b>Проекты</b>
        </div>

        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionProjects;
