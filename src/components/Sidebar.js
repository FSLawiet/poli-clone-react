import React from "react";
import {
  AiOutlineHome,
  AiOutlinePieChart,
  AiOutlineBank,
} from "react-icons/ai";
import { BiWrench } from "react-icons/bi";
import { BsGear } from "react-icons/bs";
import { FiHelpCircle } from "react-icons/fi";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { MdAttachMoney } from "react-icons/md";
import { RiWechatLine } from "react-icons/ri";
import "./Sidebar.css";
import { useStateContext } from "../contexts/ContextProvider";
function Sidebar() {
  const { currentMode } = useStateContext();
  return (
    <aside className={currentMode === "dark" ? "dark-snd" : "light-snd"}>
      <ul id="sideMenuTop">
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
      <div id="sideMenuBottom">
        <ul>
          <li>
            <FiHelpCircle />
          </li>
          <li id="menu-avatar">
            <div class="avatar">
              <div class="avatar__letters">FS</div>
            </div>
          </li>
          <li>
            <HiOutlineChevronDoubleRight />
          </li>
        </ul>
        <p id="versionLabel">Versão</p>
        <p id="versionNumber">v.0.15.182</p>
      </div>
    </aside>
  );
}

export default Sidebar;
