import Eye from "./eye";
import "./Input.css";

function Input(props) {
  let isPassword = "none";
  let type = props.type;

  if (props.type == "Password" || props.type == "password") {
    isPassword = "block";
  }

  function eyeClick() {
    if (type == "password" || type == "Password") {
      const inpt = document.getElementById("Inpt");
      console.log(inpt);
    } else {
      type = "password";
    }
  }

  return (
    <div className="input">
      <name>{type} : </name>
      <input id="Inpt" type={type} />
      <Eye dis={isPassword} func={eyeClick()} />
    </div>
  );
}

export default Input;
