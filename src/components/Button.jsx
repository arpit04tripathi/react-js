const Button = ({ children, mode = "filled", Icon, className, ...props }) => {
  let btnClass = `button ${mode}-button btn btn-primary`;

  switch(mode) {
    case 'outline':
      btnClass += 'btn btn-outline-primary'
      break;
    case 'text':
      btnClass += 'btny'
      break;
    default:
      btnClass += 'btn btn-primary'
  }

  if (Icon) {
    btnClass += " icon-button";
  }
  if (className) {
    btnClass += ` ${className}`;
  }

  return (
    <button className={btnClass} {...props}>
      {Icon && (
        <span className="button-icon">
          <Icon />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
};

export default Button;