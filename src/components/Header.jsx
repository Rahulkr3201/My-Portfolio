import React from "react";
import ThemeBtn from "./ThemeBtn";
import DateandTime from "./DateandTime";
function Header() {
  return (
    <>
      <div className="grid grid-cols-2 ">
        <div>
          <DateandTime />
        </div>
        <button></button>
        <div className="pt-5">
          {" "}
          <ThemeBtn />
        </div>
      </div>
    </>
  );
}

export default Header;
