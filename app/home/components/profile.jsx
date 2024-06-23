"use client"
import style from "./profile.module.css"
import Image from "next/image";
import PicProfile from "../../picture/chinwi.jpeg"


const ProfileInfo = () => {
    return <div>
        <div className={style.card_one}>
            <div className={style.profile_holder_pic}>
                <Image 
                    src={PicProfile}
                    width={1000}
                    height={1000}
                    alt="profile picture"
                    className={style.profile_pic}
                />
            </div>
            <div className={style.hold_pers_info}>
                <div className={style.username}>Imahri</div>
                <div className={style.fullname}>Mahri Imad-Eddine</div>
                <div className={style.lvl}>
                    <p className={style.ktaba}>Lvl</p>
                    <p className={style.ktaba}>7.50</p>
                </div>
            </div>
        </div>
    </div>;
}

export default ProfileInfo;


