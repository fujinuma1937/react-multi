import adminNavData from "@/data/admin/adminNavData";

const AdminSidebar = () => {
  return (
    <nav>
      <ul>
        {adminNavData.map((nav, index) => {
          return (
            <li key={index}>
              <a href={nav.link}></a>
              {nav.title}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default AdminSidebar;
