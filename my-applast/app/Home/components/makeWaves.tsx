// import {FC} from"react";
// import classes from "../style/cube.module.css";
// const Cubes: FC = (): JSX.Element => {
//     return (
//         <div className={classes["const2"]}>
//         <div className={classes["waves"]}>
//           <h1>Make Waves</h1>
//         </div>
//         </div>
//     );
// };

// export default Cubes;

"use client"
import { FC } from "react";
import classes from "../style/makeWaves.module.css";

const MakeWaves: FC = (): JSX.Element => {
    return (
        <div className={classes["const2"]}>

<div className={classes["contTxt"]}> 
        <h1>Masters of Light Since 1895</h1> 
        <p className={classes["contP"]}>Since 1895, founder Daniel Swarovski’s passion for innovation and design, and mastery of crystal cutting has defined Swarovski as the leading jewelry and accessories brand.</p>
        </div>





            <div className={classes["waves"]} data-aos="fade-up">
                <h1>Joyful jewelry</h1>
            </div>
        </div>
    );
};

export default MakeWaves;