"use client"
import style from "./loading_p.module.css"


const Load = () => {
    return <div>
        <div className={style.terminal_Loader}>
            <div className={style.terminal_header}>
                <div className={style.terminal_title}>Status</div>
                <div className={style.terminal_controls}>
                <div className={`${style.control} ${style.close}`}></div>
                <div className={`${style.control} ${style.minimize}`}></div>
                <div className={`${style.control} ${style.maximize}`}></div>
                </div>
            </div>
            <div className={style.text}>Loading...</div>
            </div>
    </div>;
}

export default Load;


