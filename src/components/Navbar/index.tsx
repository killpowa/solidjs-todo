import { Component, createSignal } from "solid-js";
import styles from "./Navbar.module.scss";

const Navbar: Component = () => {
  return (
    <nav class={styles.container}>
      <div>Solid Todo App</div>
    </nav>
  );
};

export default Navbar;
