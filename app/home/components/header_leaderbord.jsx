"use client"
import style from "./header_leaderbord.module.css"

const HeaderLead = () => {
    return <div>
        <div className={style.header}>
            <div className={style.header_first}>
                <p>Rank</p>
                <p>Username</p>
            </div>
            <div className={style.header_second}>
                <p>Lvl</p>
            </div>
        </div>
    </div>;
}


export default HeaderLead;