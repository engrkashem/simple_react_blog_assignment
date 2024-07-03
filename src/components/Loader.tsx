import loaderStyle from "../styles/loader.module.css";

export default function Loader() {
  return (
    <div className={loaderStyle.container}>
      <div className={loaderStyle.loader}></div>
    </div>
  );
}
