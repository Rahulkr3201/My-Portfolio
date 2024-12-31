import React from "react";
import ThemeBtn from "./ThemeBtn";
import DateandTime from "./DateandTime";

function Header() {
  return (
    <div className="grid grid-cols-2 items-center p-4 bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600">
      <div>
        <DateandTime />
      </div>
      <div className="text-right">
        <ThemeBtn />
      </div>
    </div>
  );
}

export default Header;
