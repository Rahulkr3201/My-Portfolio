import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./store/authSlice";
import { MdLightMode, MdDarkMode } from "react-icons/md";
export default function ThemeBtn() {
  const mode = useSelector((state) => state.themeMode.mode);
  const dispatch = useDispatch();
  return (
    <>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={() => dispatch(toggleTheme())}
          // checked={themeMode === "dark"}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500 mr-3"></div>
        <span className="">
          {mode === "light" ? (
            <MdLightMode />
          ) : (
            <MdDarkMode className="text-white" />
          )}
        </span>
      </label>
    </>
  );
}
