import React from "react";
// import { isTemplateElement } from "@babel/types";
const ListGroup = props => {
  const { items, selectedItem, onItemSelect,textProperty,valueProperty } = props;
  return (
    <ul className="list-group">
      {items.map(item => {
        return (
          <li key={item[valueProperty]}
            onClick={() => onItemSelect(item)}
            className={
              item === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item[textProperty]}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};
ListGroup.defaultProps={
  textProperty:"name",
  valueProperty:"_id"
}

export default ListGroup;
