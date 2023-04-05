import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Login from "@/components/Login/Login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // this is landing page for this app 
  return (
    <>
      <Login/>
    </>
  );
}
