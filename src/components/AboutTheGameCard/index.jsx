export const AboutTheGameCard = (props) => {
  return (
    <div>
      <img
        src={props.image}
        alt=""
        style={{ width: "300px", height: "200px", float: "left" }}
      />
      <div dangerouslySetInnerHTML={{ __html: props.text }} />
      <div style={{ clear: "both" }}></div>
    </div>
  );
};
