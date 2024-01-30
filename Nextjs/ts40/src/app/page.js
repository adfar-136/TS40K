import Image from "next/image";
import styles from "./page.module.css";
import Github from "./components/GithubFinder/Github";

export default function Home() {
  return (
     <div>
       <h1>Home page component</h1>
       <Github/>
     </div>
  );
}
