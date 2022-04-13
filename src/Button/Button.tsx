import Bug from "Bug";
import css from "./Button.module.scss";

function Button() {
  return (
    <button className={css.root}>
      <Bug />
    </button>
  );
}

export default Button;
