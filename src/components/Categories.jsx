import React from "react";
import Button from "./Button";
const Categories = () => {
  return (
    <div>
      <div>
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <Button key={i} text={`Category ${i}`} />
          ))}
      </div>
    </div>
  );
};

export default Categories;
