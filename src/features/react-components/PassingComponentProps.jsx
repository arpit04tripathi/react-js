export function ComponentProps(props) {
  // destucture props as const
  // const { title, description } = props;
  // alert (title+"\n"+description );
  return (
    <div className="border p-5 m-5">
      <p>Title: {props.title}</p>
      <p>Description: ComponentProps - {props.description}</p>
    </div>
  );
}

export function ComponentPropsDestructured({ title, description = "default description" }) {
  return (
    <div className="border p-5 m-5">
      <p>Title: {title}</p>
      <p>Description: ComponentPropsDestructured - {description}</p>
    </div>
  );
}

export function ComponentPropsWithChildren(props) {
  return (
    <div className="border p-5 m-5">
      <p>Title: {props.title}</p>
      <p>Description: ComponentPropsWithChildren - <strong>{props.description}</strong></p>
      <div>{props.children}</div>
    </div>
  );
}

export function ComponentPropsDestructuredWithChildren({children, title, description = "default description"}) {
  return (
    <div className="border p-5 m-5">
      <p>Title: {title}</p>
      <p>Description: ComponentPropsWithChildren - <strong>{description}</strong></p>
      <div>{children}</div>
    </div>
  );
}
