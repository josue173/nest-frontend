import { connectToServer } from "./socket-cliente";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h2> Websocket - Client </h2>
    <input id="jwt-token" placeholder="Json Web Token"/>
    <button id="btn-connect">Connect</button>
    </br> 
    <span id="server-status"> offline </span> 
    <ul id="clients-ul"> 
      <li></li>
    </ul>
    <form id="message-form">
      <input placeholder="message" id="message-input"/>
      <h3>Messages</h3>
      <ul id="messages-ul">

      </ul>
    </form>
  </div>
`;

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

// conectToServer();

const jwtToken = document.querySelector<HTMLInputElement>("#jwt-token")!;
const btnConnect = document.querySelector<HTMLButtonElement>("#btn-connect")!;

btnConnect.addEventListener("click", () => {
  if (jwtToken.value.trim().length <= 0) return alert("Enter a valid JWT");
  connectToServer(jwtToken.value.trim());
});
