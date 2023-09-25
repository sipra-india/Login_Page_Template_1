import Eye from "./eye";

function Input(props) {
  return (
    <div className="input">
      <name>{props.type} : </name>
      <input type={props.type} />
      <Eye />
    </div>
  );
}

export default Input;
