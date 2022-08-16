import { RiMenu4Line } from "react-icons/ri";

function Hamburger(props) {
  return (
    <RiMenu4Line
      className="block md:hidden w-10 h-10 cursor-pointer stroke-0 fill-std-green"
      onClick={() => props.setMenu(true)}
    />
  );
}

export default Hamburger;
