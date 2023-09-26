import eye_on from "./Images/eye.png";
import eye_off from "./Images/eye_off.png";
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
      const img = document.getElementById("image");
      img.setAttribute("src", eye_off);
      inpt.setAttribute("type", "text");
      type = "text";
    } else {
      const int = document.getElementById("Inpt");
      const ig = document.getElementById("image");
      ig.setAttribute("src", eye_on);
      int.setAttribute("type", "password");
      type = "password";
    }
  }

  return (
    <div className="input">
      <name>{type} : </name>
      <input id="Inpt" type={type} />
      <button onClick={eyeClick} style={{ display: isPassword }}>
        <img id="image" src={eye_on} width="15" />
      </button>
    </div>
  );
}

export default Input;
