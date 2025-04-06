import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="p-4">
      <ul className="flex text-gray-600">
        <li>
          <Link to="/" className="text-blue-500">خانه</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <li key={to} className="mx-2">
              <span> / </span>
              <Link to={to} className="text-blue-500 capitalize">{value}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;