import eye_on from "./Images/eye.png";

function Eye(props) {
  return (
    <div>
      <button onClick={props.func}>
        <img src={eye_on} width="15" style={{ display: props.dis }} />
      </button>
    </div>
  );
}

export default Eye;
