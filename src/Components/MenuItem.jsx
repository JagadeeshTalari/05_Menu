import React from "react";
function MenuItem({ ...menuItem }) {
  const { id, title, category, price, img, desc } = menuItem;
  return (
    <div key={id} className="menu-item">
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <p className="item-price">{price}</p>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </div>
  );
}

export default MenuItem;
