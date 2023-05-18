import logo from "/logos/logo-tiny.png";

const NavBar = () => {
  return (
    <nav className= "min-w-full flex justify-center  rounded-lg fixed">
      <div className="bg-harbs-brown min-w-[85%] px-10 py-3 border border-harbs-yellow-lightest flex justify-between rounded-lg">
        <div>
          <img className="w-auto h-10 px-10" src={logo} />
        </div>
        <div className="flex space-x-20">
          <button className="text-harbs-yellow-lightest text-1xl font-taviraj hover:font-semibold">
            Our Story
          </button>
          <button className="text-harbs-yellow-lightest text-1xl font-taviraj hover:font-semibold">
            Featured Cakes
          </button>
          <button className="text-harbs-yellow-lightest text-1xl font-taviraj hover:font-semibold">
            Locations
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
