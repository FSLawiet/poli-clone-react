import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { BsSun, BsMoon } from "react-icons/bs";
import { RiWechatLine } from "react-icons/ri";
import "./Navbar.css";

function Navbar() {
  const { setMode, currentMode } = useStateContext();

  return (
    <nav>
      <div id="logo">
        <svg
          version="1.1"
          id="svg870"
          width="32.32"
          height="30.719999"
          viewBox="0 0 32.32 30.719999"
        >
          <defs id="defs874" />
          <g id="g876">
            <path
              d="M 1.2024274,30.237531 C -0.27722364,29.201142 -0.24798264,28.707058 1.8119432,19.938659 3.9597421,10.796212 4.0600487,10.556242 6.0516883,9.7956275 8.0684979,9.025401 9.3607699,9.2230915 9.1514237,10.269823 c -1.3342874,6.671437 2.5512943,11.494943 9.4875973,11.77777 3.247596,0.13242 3.247596,0.13242 2.995129,1.012721 -0.808751,2.819953 -1.734726,3.209509 -7.629008,3.209509 -4.4468377,0 -4.4468377,0 -6.8196665,1.870951 -3.5823974,2.824684 -4.4897864,3.142677 -5.9830481,2.096757 z M 17.775952,21.138045 C 12.571345,20.767917 9.3937795,17.099017 9.9158567,12.062572 10.176916,9.5441536 10.423498,9.3098224 12.812526,9.3098224 c 5.646177,0 9.601613,3.3565976 9.613957,8.1584386 0.0098,3.814982 -0.206675,3.985812 -4.650531,3.669784 z m 5.364743,0.134383 c -0.08478,-0.08479 -0.01469,-0.759055 0.155767,-1.49838 1.375768,-5.967161 -3.2087,-11.094056 -9.926602,-11.1010995 -2.943875,-0.00309 -2.978757,-0.012227 -2.759461,-0.7231261 0.931943,-3.0211112 1.867707,-3.4399998 7.684684,-3.4399998 4.364215,0 4.364215,0 7.402878,-2.24 3.978456,-2.93278336 6.493462,-2.85786936 6.493462,0.1934199 0,1.6182357 -3.427856,16.3284685 -4.013074,17.2216235 -0.692014,1.056147 -4.400408,2.224808 -5.037654,1.587562 z"
              id="path1580"
            />
          </g>
        </svg>
      </div>
      <div>
        <RiWechatLine style={{ color: "#006168", fontSize: "1.2em" }} />
        <span id="title">Polichat</span>
      </div>
      <ul id="dropdown">
        <li>
          <div className="option">Menu 1</div>
          <ul>
            <li>
              <div className="option">Opção 1</div>
            </li>
            <li>
              <div className="option">Opção 2</div>
            </li>
          </ul>
        </li>
        <li>
          <div className="option">Menu 1</div>
          <ul>
            <li>
              <div className="option">Opção 1</div>
            </li>
            <li>
              <div className="option">Opção 2</div>
            </li>
          </ul>
        </li>
      </ul>
      <button className="promo">Indique e ganhe!</button>
      <div id="dark-mode-toggle">
        <input
          type="checkbox"
          id="toggle"
          checked={currentMode === "dark" ? true : false}
          onChange={setMode}
        />
        <BsSun />
        <label htmlFor="toggle"></label>
        <BsMoon />
      </div>
    </nav>
  );
}

export default Navbar;
