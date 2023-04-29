import style from "./Sidebar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function SideBar() {
  return (
    <aside className={cx("wrapper")}>
      <h1>SideBar</h1>
    </aside>
  );
}

export default SideBar;
