import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
