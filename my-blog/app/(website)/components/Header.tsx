import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className=" bg-primary ">
      <div className="container mx-auto max-w-5xl py-5 px-4 sm:px-8">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
