import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { scrollTriggerPage } from "hooks/scrollTrigger";

// context
import AnimationContext from "context";

// components
import Cursor from "../../components/Cursor";

// pages
import Home from "../Home";

function App() {
  const [finishStartAnimation, setFinishStartAnimation] =
    useState<boolean>(false);
  const [scrollbar, setScrollBar] = useState<any>(null);

  useEffect(() => {
    if (finishStartAnimation) {
      const scroll = scrollTriggerPage();
      setScrollBar(scroll);
    }
  }, [finishStartAnimation, scrollbar]);

  return (
    <AnimationContext.Provider value={{ setFinishStartAnimation, scrollbar }}>
      <main className="home">
        <div className="scroller">
          <BrowserRouter>
            <Routes>
              <Route path="/photo/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </div>
        <Cursor />
        <div className="site-noise"></div>
      </main>
    </AnimationContext.Provider>
  );
}

export default App;
