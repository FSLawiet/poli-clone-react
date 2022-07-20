import React from "react";
import {
  AiOutlineHome,
  AiOutlinePieChart,
  AiOutlineBank,
} from "react-icons/ai";
import { BiWrench } from "react-icons/bi";
import { BsGear } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import { RiWechatLine } from "react-icons/ri";
import "./Sidebar.css";
function Sidebar() {
  return (
    <aside>
      <ul>
        <li>
          <AiOutlineHome />
        </li>
        <li>
          <RiWechatLine />
        </li>
        <li>
          <AiOutlinePieChart />
        </li>
        <li>
          <AiOutlineBank />
        </li>
        <li>
          <BsGear />
        </li>
        <li>
          <MdAttachMoney />
        </li>
        <li>
          <BiWrench />
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
