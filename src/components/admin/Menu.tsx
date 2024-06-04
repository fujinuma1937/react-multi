type MenuProps = { siteTitle: string };

const Menu: React.FC<MenuProps> = ({ siteTitle }) => {
  return (
    <div>
      <header>{siteTitle}</header>
      <main>メニューです</main>
    </div>
  );
};
export default Menu;
