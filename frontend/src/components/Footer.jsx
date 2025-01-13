import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div>
          <img src={assets.logo} alt="" className="mb-5 w-32 " />
          <p className="w-full md:2/3 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
            obcaecati, magni doloremque eveniet nostrum debitis aliquam
            quibusdam perferendis fugiat. Pariatur!
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home </li>
            <li>About us</li>
            <li> Delivery</li>
            <li> Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+011-8960453232</li>
            <li>contact@froeveryou.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ forever.com -All Right Reserved.
        </p>
        <p className="pb-3 text-xs text-center">Designed by:- Kirti Lohchab</p>
      </div>
    </div>
  );
};

export default Footer;
