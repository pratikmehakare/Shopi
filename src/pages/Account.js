import React from 'react';
import Profile from "../assest/Profile.png";

const Account = () => {
  return (
    <div className="mt-7 flex items-center justify-center bg-white px-4">
      <div className="text-center w-full">
        <h1 className="text-xl font-semibold mb-8">My Account</h1>

        {/* Bigger Box */}
        <div className="border rounded-xl p-10 max-w-3xl mx-auto shadow-md">
          <h2 className="text-lg font-light mb-6">Created by:</h2>

          <div className="flex flex-col items-center">
            <img
              src={Profile}
              alt="Profile"
              className="w-48 h-48 object-cover rounded-full border-2"
            />

            <h3 className="font-bold text-2xl mt-6">
              Pratik Mehakare
            </h3>

            <a
              href="https://www.linkedin.com/in/pratik-mehakare-99839820b/"
              className="text-base text-blue-600 hover:underline mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              @pratikmehakare 👉
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
