import { useEffect, useState } from "react";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

export default function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className={`app-container ${visible ? "visible" : "loading"}`}>
      <Aside />
      <div className="content">
        <Header />
        <Main />
      </div>
    </div>
  );
}