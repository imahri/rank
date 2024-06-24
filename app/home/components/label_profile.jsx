"use client"
import style from "./label_profile.module.css"
import Image from "next/image";
import profilePic from "../../picture/chinwi.jpeg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
import { useState } from "react";

const LabelProfile = (props) => {
    const {picpic, username, level, id} = props;
    const [redir, setRedir] =  useState(false);
    
    const  notify = () => {
        toast.success(("Visit " + username + " intra"),{
            closeOnClick: true,
        });
    };

    function all_in(){
        notify();
    }

    var li = "https://profile.intra.42.fr/users/" + username
    return <div>
    <Link href={li} legacyBehavior>
        <a target="_blank" rel="noopener noreferrer">
    <div className={style.container} onClick={() => {
        setRedir(!redir);}}>

            <div className={style.first_part}>
                <div className={style.pic}>
                    <p className={style.index}>{id + 1}</p>
                    <Image 
                        src={picpic.versions.small || profilePic}
                        width={1000}
                        height={1000}
                        alt="profile pic"
                        className={style.pic_user}
                        />
                </div>

                <div className={style.info}>
                    <p className={style.login}>{username}</p>
                </div>

            </div>
                <div className={style.second_part}>{level}</div>
   
                </div>
            </a>
        </Link>
    </div>;
}


export default LabelProfile;