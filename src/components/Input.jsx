const Input =({richText, ...props}) => {
  let element = <input {...props}></input>
  if(richText){
      <textarea {...props}></textarea>
  }
  return element;
}

export default Input;