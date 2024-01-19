import { useState } from "react";
import PortfolioList from "./PortfolioList";
import Toolbar from "./Toolbar";
export default function Portfolio({ images }) {
  const [portfolio, setPortfolio] = useState(images);
  const [link, setLink] = useState("All");
  function handlerPortfolio(category) {
    setLink(category);
    if (category == "All") {
      setPortfolio(images);
      return;
    }
    setPortfolio(() => images.filter((item) => item.category === category));
  }
  return (
    <>
      <Toolbar
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected={link}
        onSelectFilter={handlerPortfolio}
      />
      <PortfolioList portfolio={portfolio} />
    </>
  );
}
