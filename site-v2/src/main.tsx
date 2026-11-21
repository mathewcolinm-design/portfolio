import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const root = document.getElementById("root")!;

// The site's content is read from content/ when the app loads. If a file has a
// mistake, show the message on the page instead of a blank screen.
import("./App")
  .then(({ default: App }) => {
    createRoot(root).render(
      <StrictMode>
        <App />
      </StrictMode>,
    );
  })
  .catch((error: Error) => {
    root.innerHTML = "";
    const box = document.createElement("div");
    box.setAttribute("role", "alert");
    box.style.cssText =
      "max-width:640px;margin:15vh auto;padding:24px;font:16px/1.6 'Geist Variable',system-ui,sans-serif;color:#0a0a0a;border:1px solid rgb(0 0 0/.12);border-radius:10px";
    const title = document.createElement("p");
    title.style.cssText = "margin:0 0 8px;font-weight:500";
    title.textContent = "The site couldn't load its content";
    const message = document.createElement("p");
    message.style.margin = "0";
    message.textContent = error.message;
    box.append(title, message);
    root.append(box);
    console.error(error);
  });
