"use client"
import style from "./base.module.css"
import Image from "next/image";
import Navbar from "./navbar"
import ProfileInfo from "./profile"
import Campus from "./campus"
import Futur from "./futur"
import HeaderLead from "./header_leaderbord"
import LabelProfile from "./label_profile"
import Load from "./loading_p"
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import profilePic from "../../picture/chinwi.jpeg"
import Link from "next/link";


const Base = () => {
    const [users, setUsers] = useState([]);
    const [text, setText] = useState("");
    const [UserIntra, setUserIntra] = useState("");
    const [data, setData] = useState("");

    const [PTop_login, setTop_login] = useState("");
    const [PTop_fullname, setTop_fullname] = useState("");
    const [PTop_picture, setTop_picture] = useState("");
    const [PTop_level, setTop_level] = useState(0);
    const sortedUsers = [...users]
    .sort((a, b) => a.login.localeCompare(b.login))
    .sort((a, b) => b.level - a.level);


    const handleSearch = (name) => {
        if (name.length > 0) {
            const filterUsers = data.filter((item) => {
                
                if (item.login && typeof item.login === 'string') {
                    return item.login.toLowerCase().includes(name.toLowerCase());
                }
                return false;
            });
            setUsers(filterUsers);
        } else {
            setUsers(data);
        }
    };



    useEffect(()=> {
        var query = location.search
        var error = query?.split('?')
        const accessToken = error[1].replace('access=', '')


        axios.get(`http://localhost:8000/users/?campus=Khouribga&month=june&access=${accessToken}`)
        .then(response => {
            console.log(response.data.users[0])
            setUsers(response.data.users);
            setData(response.data.users);
            setTop_login(response.data.users[0].login)
            setTop_fullname(response.data.users[0].usual_full_name)
            setTop_picture(response.data.users[0].image.versions.small)
            setTop_level(response.data.users[0].level || 0)
        })
        .catch(error => {
            console.log(error)
        })
        axios.get('https://api.intra.42.fr/v2/me/', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then(response => {
            console.log(response.data);
            setPLogin(response.data.login);
            setPUsername(response.data.usual_full_name);
            setPPictuer(response.data.image.versions.small);
           
        })
        .catch(error => {
            console.log(error)
        })
    }, [])


    console.log(">>> ", UserIntra);
    return (
        <div className={style.container}>

            <Navbar text={text} setText={setText} handleSearch={handleSearch} />
            <div className={style.body_holder}>

                <div className={style.part_ones_body}>
                    <div className={style.prive_ticket}>
                        <div className={style.prive_ticket_one}>

                            <div className={style.prive_pic}>
                                <Image 
                                    src={PTop_picture}
                                    width={1000}
                                    height={1000}
                                    alt="profile pic"
                                    className={style.pic_user}
                                />
                            </div>
                            <div className={style.prive_info}>
                                <p className={style.username}>{PTop_login}</p>
                                <p className={style.fullname}>{PTop_fullname}</p>
                            </div>

                        </div>
                        <div className={style.prive_ticket_second}>
                            <p className={style.lvl}>Lvl</p>
                            <p className={style.lvl_value}>{PTop_level}</p>
                        </div>
                    </div>
                </div>
                <div className={style.part_two_body}>
                    <HeaderLead />
                    <div className={style.the_holder}>
                        {
                            sortedUsers.length > 0 && sortedUsers.map((e, index) =>
                                <LabelProfile picpic={e.image} username={e.login} level={0} key={e.id} id={index}/>
                        )
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Base;
