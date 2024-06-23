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


const Base = () => {
    const [users, setUsers] = useState([])

	useEffect(()=> {
		axios.get('http://localhost:8000/users/?campus=Khouribga&month=june')
		.then(response => {
			console.log(response.data.users[0])
			setUsers(response.data.users)
		})
		.catch(error => {
			console.log(error)
		})
	}, [])
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
                        <Load />
                    </div>
                </div>

            </div>


            <div className={style.part_two_body}>

                <HeaderLead />

                <div className={style.the_holder}>
                {
                    users && users.map((e, index) => 
                        <LabelProfile picpic={e.image} username={e.login} level='0.0' key={e.id} id={e.id} />
                    )
                }

                </div>

            </div>
        </div>



    </div>;
}


export default Base;