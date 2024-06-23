"use client"
import style from "./label_profile.module.css"
import Image from "next/image";
import profilePic from "../../picture/chinwi.jpeg"


const LabelProfile = () => {
    return <div className={style.container}>
        <div className={style.first_part}>

            <div className={style.pic}>
                <div>1</div>
                <div>
                    <Image 
                        src={profilePic}
                        width={1000}
                        height={1000}
                        alt="profile pic"
                        className={style.pic_user}
                    />
                </div>
            </div>

            <div className={style.info}>
                
            </div>

        </div>

        <div className={style.second_part}>8.05</div>

    </div>;
}


export default LabelProfile;