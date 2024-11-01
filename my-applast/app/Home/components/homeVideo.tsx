"use client"
import { useRef, useEffect, useState } from "react";
import classes from "../style/homeVideo.module.css";
const HomeVideo = () => {
    const useVideoRef = useRef<HTMLVideoElement | null>(null);
    const [play, setPlay] = useState(false);
    useEffect(() => {
        if (useVideoRef.current) {
            useVideoRef.current.play();
        }
    }, []);

    return (
        <div className={classes["container_static"]}>
        <div className={classes["container"]}>
            <video
                ref={useVideoRef}
                loop
                muted
                className={classes["homeVideo"]}
                src="https://asset.swarovski.com/videos/f_auto,q_auto,w_1920,h_1080,c_fill/ac_none/swa-cms/videos/09_SWAROVSKI_SS24_SUBLIMA_WHITE_16_9_6s_VI/TT.mp4"
            ></video>
           
        </div>


 

        </div>
    );
};

export default HomeVideo;