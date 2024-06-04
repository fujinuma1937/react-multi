import navData from "@/data/front/navData";

const Header = () => {
  return (
    <header className="bg-blue-600 w-full flex justify-between items-center px-4 py-2">
      <h1 className="text-white text-center py-4">Header</h1>
      <nav>
        <ul className="flex gap-x-4 text-white">
          {navData.map((nav, index) => {
            return (
              <li key={index}>
                <a href={nav.link}>{nav.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
