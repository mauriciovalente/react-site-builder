import "./styles.css";
import { ConsoleLink } from "../ConsoleLink";
import { data } from "./data.js";

export const ConsolesLink = () => {
  const games = data;
  return (
    <div className="links-console">
      {games.map((c) => {
        return <ConsoleLink key={c.id} name={c.name} image={c.image} />;
      })}
    </div>
  );
};
