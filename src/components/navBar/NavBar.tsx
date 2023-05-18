import logo from "/logos/logo-tiny.png"

const NavBar = () => {
    return (
        <nav className="bg-harbs-brown fixed max-w-200 rounded-lg">
      <div className="px-10 py-3 border border-harbs-yellow-lightest flex justify-between rounded-lg">
        <div> <img
            className="w-auto h-10"
            src={logo}
          /></div>
        <div className="flex space-x-4">
       <button className="text-harbs-yellow-lightest">Our Story</button>
       <button className="text-harbs-yellow-lightest">Featured Cakes</button>
       <button className="text-harbs-yellow-lightest">Locations</button>
       </div>
       
      </div>
      </nav>
    );
  };
  
  export default NavBar;