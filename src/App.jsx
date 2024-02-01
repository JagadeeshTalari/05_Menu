import { Title } from "./Components/Title";
import Categories from "./Components/Categories";
import MenuItem from "./Components/MenuItem";
import { useEffect, useState } from "react";
import data from "./data";

//get all categories list - without having duplicate values
const newCategories = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menuList, setMenuList] = useState(data);
  const [categories, setCategories] = useState(newCategories);

  //filter menu based on category
  const updateMenuList = (category) => {
    if (category !== "all") {
      const newMenuList = data.filter((item) => item.category === category);
      return setMenuList(newMenuList);
    }
    return setMenuList(data);
  };
  return (
    <main>
      <section className="menu">
        <Title />
        {/* btn-container */}
        <Categories categories={categories} updateMenuList={updateMenuList} />
        {/* Menu-Items */}
        <section className="section-center">
          {menuList.map((menuItem) => {
            return <MenuItem key={menuItem.id} {...menuItem} />;
          })}
        </section>
      </section>
    </main>
  );
};
export default App;
