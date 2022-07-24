import React from "react";
import "./View.css";

function View() {
  return (
    <section>
      <div id="chat">
        <div class="chat__lista">
          <div class="chat__header">
            <input
              type="text"
              placeholder="Search..."
              name=""
              class="form-control search"
            />
          </div>
          <div class="chat__lista_contatos">
            <ul>
              <li>
                <div class="status_cont">
                  <img src="./img/avatar.jpg" alt="Avatar"/>
                  <span class="status"></span>
                </div>
                <div class="chat__lista_contatos_info">
                  <span>Khalid</span>
                  <p>Kalid is online</p>
                </div>
              </li>
              <li>
                <div class="status_cont">
                  <img src="./img/avatar.jpg" alt="Avatar"/>
                  <span class="status offline"></span>
                </div>
                <div class="chat__lista_contatos_info">
                  <span>Khalid</span>
                  <p>Kalid left 3h ago</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="chat">
          <div class="chat__janela_header">
            <div class="status_cont">
              <img src="./img/avatar.jpg" alt="Avatar"/>
              <span class="status online"></span>
            </div>
            <div class="status__conversa">
              <span>Chat with Khalid</span>
              <p>1767 Messages</p>
            </div>
            <div class="video_cam">
              <span>
                <i class="fas fa-video"></i>
              </span>
              <span>
                <i class="fas fa-phone"></i>
              </span>
            </div>
            <span id="action_menu_btn">
              <i class="fas fa-ellipsis-v"></i>
            </span>
            <div class="action_menu">
              <ul>
                <li>
                  <i class="fas fa-user-circle"></i> View profile
                </li>
                <li>
                  <i class="fas fa-users"></i> Add to close friends
                </li>
                <li>
                  <i class="fas fa-plus"></i> Add to group
                </li>
                <li>
                  <i class="fas fa-ban"></i> Block
                </li>
              </ul>
            </div>
          </div>
          <div class="chat__janela_corpo">
            <div class="enviado">
              <div class="status_cont">
                <img
                  src="./img/avatar.jpg" alt="Avatar"
                  class="chat__avatar"
                />
              </div>
              <div class="enviado__texto">
                Hi, how are you samim?
                <span class="tempo enviado">8:40 AM, Today</span>
              </div>
            </div>
            <div class="recebido">
              <div class="recebido__texto">
                Hi Khalid i am good tnx how about you?
                <span class="tempo recebido">8:55 AM, Today</span>
              </div>
              <div class="status_cont">
                <img
                  src="./img/avatar.jpg" alt="Avatar"
                  class="chat__avatar"
                />
              </div>
            </div>
            <div class="caixatexto__container">
              <textarea
                name=""
                class="msg"
                placeholder="Type your message..."
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default View;
