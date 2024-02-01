import React from "react";
function Categories({ categories, updateMenuList }) {
  return (
    <section className="btn-container">
      {categories.map((category) => {
        return (
          <button onClick={() => updateMenuList(category)} className="btn">
            {category}
          </button>
        );
      })}
    </section>
  );
}

export default Categories;
