"use client"
import style from "./label_profile.module.css"
import Image from "next/image";
import profilePic from "../../picture/chinwi.jpeg"


const LabelProfile = (props) => {
    const {picpic, username, level, id} = props;

    return <div className={style.container}>
        <div className={style.first_part}>

            <div className={style.pic}>
                {/* <div>{id}</div> */}
                <div>
                    {/* {picpic.link != null &&  <Image 
                        src={picpic.link}
                        width={1000}
                        height={1000}
                        alt="profile pic"
                        className={style.pic_user}
                    />} */}
                    {/* { picpic.link == null */}
                     <Image 
                        src={picpic.versions.small || profilePic}
                        width={1000}
                        height={1000}
                        alt="profile pic"
                        className={style.pic_user}
                    />
                   
                </div>
            </div>

            <div className={style.info}>
                <p className={style.login}>{username}</p>
            </div>

        </div>

        <div className={style.second_part}>{level}</div>

    </div>;
}


export default LabelProfile;