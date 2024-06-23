"use client"
import style from "./navbar.module.css"
import Image from "next/image";
import { VscSettings } from "react-icons/vsc";
import PicProfile from "../../picture/chinwi.jpeg"
import { IoSearch } from "react-icons/io5";


const NavBar = () => {
    return <div>
        <div className={style.navbar}>
            <div className={style.navbar_container}>
                <div className={`${style.flexit} ${style.first_part}`}>
                    <div className={style.logo}>
                        24
                    </div>
                    <div className={style.search_holder}>
                        <IoSearch className={style.search_logo} size={30}/>
                        <input type="text" placeholder="search"  className={style.search}/>
                    </div>
                </div>

                <div className={`${style.flexit} ${style.second_part}`}>
                    <div  className={style.setting_holder}>
                        <VscSettings className={style.set_logo} size={25}/>
                    </div>
                    <div className={style.profile_holder}>
                        <div >
                            <Image 
                                src={PicProfile}
                                width={100}
                                height={100}
                                alt="profile picture"
                                className={style.profile_holder_pic}
                            />
                        </div>
                        <div className={style.profile_holder_username}>
                            profile
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        <div className={style.block}></div>

        <div className={style.lookforit}>
            <IoSearch className={style.search_logo} size={30}/>
            <input type="text" placeholder="search"  className={style.search}/>
        </div>

    </div>;
}


export default NavBar;