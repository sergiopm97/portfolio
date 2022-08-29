import { RiCloseCircleLine } from "react-icons/ri";

function Cross(props) {
  return (
    <RiCloseCircleLine
      className="absolute top-0 right-0 mt-7 mr-7 h-10 w-10 cursor-pointer fill-std-navy"
      onClick={() => props.setMenu(false)}
    />
  );
}

export default Cross;
