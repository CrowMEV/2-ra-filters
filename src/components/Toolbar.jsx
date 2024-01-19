import "./toolbar.css";
export default function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div className="toolbar">
      {filters.map((category) => (
        <a
          key={category}
          className={selected === category ? "active link" : "link"}
          onClick={() => onSelectFilter(category)}
          href="#"
        >
          {category}
        </a>
      ))}
    </div>
  );
}
