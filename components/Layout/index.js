import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";
import styles from './Layout.module.css';
import Head from 'next/head';
const Layout = ({children}) =>{
    return(
        <>
        <Head>
            <title>Next Js | React Js </title>
            <meta name="description" content="Web Next Js Ima Nirmala"></meta>
        </Head>
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>{children}</div>
            <Footer />
        </div>
        </>
    );
}
export default Layout;
