import homeStyle from "../styles/home.module.css";

export default function Home() {
  return (
    <div className={homeStyle.container}>
      <h1 className={homeStyle.title}>
        <span className="twoEm">LEARN </span>First
        <br />
        Then{" "}
        <span className="twoEm ">
          <span className="line-through colorGray">L</span>EARN
        </span>
      </h1>
    </div>
  );
}
