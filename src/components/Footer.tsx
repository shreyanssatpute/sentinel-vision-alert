
import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Violence Detection System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
