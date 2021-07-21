import "./styles.css";
import { data } from "./data.js";

export const InstitutionalLinks = () => {
  const links = data;
  return (
    <div className="institutional-links">
      {links.map((l) => {
        return (
          <div key={l.id}>
            <a
              style={{ display: "inline", padding: "10px" }}
              key={l.id}
              href={l.text}
            >
              {l.text}
            </a>
            <span style={{ padding: "10px" }}>.</span>
          </div>
        );
      })}
    </div>
  );
};
