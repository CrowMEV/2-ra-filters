export default function PortfolioList({ portfolio }) {
  return (
    <>
      {portfolio.map((item, index) => (
        <img key={index} src={item.img} />
      ))}
    </>
  );
}
