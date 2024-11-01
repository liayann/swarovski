"use client"
import Link from "next/link";
import { FC, useEffect } from "react";
import classes from "./menu.module.css"
import AOS from "aos"
const Menu: FC=()=>{


    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true, 
        });
      }, []);

    return(
        <div className={classes["container"]}>
                <div className={classes["text_container"]}>
               <div className={classes["text_div"]}>
               <p className={classes["swarovski-text"]} >SWAROVSKI</p>

               </div>
            </div>
             <nav className={classes["navigation"]}>
                <Link className={classes["nav_link"]} href={"#"}>
                    Home
                </Link>
                <Link className={classes["nav_link"]} href={"#"}>
                    link 1
                </Link>
                <Link className={classes["nav_link"]} href={"#"}>
                    link 2
                </Link>
                <Link className={classes["nav_link"]} href={"#"}>
                    link 3
                </Link>
                <Link className={classes["nav_link"]} href={"#"}>
                    link 4
                </Link>
            </nav>

       

        </div>
    )
}

export default Menu