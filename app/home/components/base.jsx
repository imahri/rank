"use client"
import style from "./base.module.css"
import Image from "next/image";

import Navbar from "./navbar"
import ProfileInfo from "./profile"
import Campus from "./campus"
import Futur from "./futur"
import HeaderLead from "./header_leaderbord"
import LabelProfile from "./label_profile"


const Base = () => {
    return <div className={style.container}>

        <Navbar />


        <div className={style.body_holder}>
            <div className={style.part_one_body}>
                <div className={style.walo}>
                    <div className={style.part_one_body}>
                        <ProfileInfo />
                        <Campus />
                        <Futur />
                        <Futur />
                    </div>
                    <div className={style.box}>
                        asdsdas
                    </div>
                </div>

            </div>


            <div className={style.part_two_body}>

                <HeaderLead />

                <div className={style.the_holder}>
                    <LabelProfile />
                </div>

            </div>
        </div>


    </div>;
}


export default Base;