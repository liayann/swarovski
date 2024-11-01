import Image from "next/image";
import styles from "./page.module.css";
import HomeVideo from "./Home/components/homeVideo";
import MakeWaves from "./Home/components/makeWaves";

export default function Home() {
  return (
    <div className={styles.page}>
    
      <HomeVideo/>
      <MakeWaves/>


    </div>
  );
}
