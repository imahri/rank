"use client"
import style from "./campus.module.css"


const Campus = () => {
    return <div>
        <div className={style.card_two}>
            <div className={style.row_data}>
                <p className={`${style.ktaba} ${style.campus}`}>Rank</p>
                <p className={`${style.ktaba} ${style.campus_id}`}>12</p>
            </div>
            <div className={style.row_data}>
                <p className={`${style.ktaba} ${style.campus}`}>Campus</p>
                <p className={`${style.ktaba} ${style.campus_id}`}>Khouribga</p>
            </div>
        </div>
    </div>;
}

export default Campus;


