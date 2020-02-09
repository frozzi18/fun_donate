import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="bg-gray-900 items-center justify-between px-4 py-3 text-white flex">
        <img src="/images/fd.png" className="h-16 px-4" alt="logo" />
        <div className="flex text-xl">
          <div className="px-4">Companies</div>
          <div className="px-4">About Us</div>
          <button
            type="button"
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none hidden"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}
