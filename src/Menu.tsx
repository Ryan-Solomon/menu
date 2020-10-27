import React, { FC } from 'react';

import { MenuItem as MenuItemType } from './data/Data';

type Props = {
  menuItems: MenuItemType[];
};

const Menu: FC<Props> = (props) => {
  return (
    <div>
      {props.menuItems.map((item) => {
        return (
          <React.Fragment>
            <h1>{item.title}</h1>
            <h2>{item.category}</h2>
            <p>{item.desc}</p>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Menu;
