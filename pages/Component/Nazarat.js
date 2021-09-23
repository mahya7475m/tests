import React from 'react';
import Image from "next/image";
import clases from "../Footer/footer.module.css";
import start from '../../public/area/20.png';
import sanj from '../../public/area/sanj.png';
import nam from '../../public/area/nam.png';
import lab from '../../public/area/lab.png';
import sstar from '../../public/area/Vector 2664.png';
import sstars from '../../public/area/Vector 2666.png';
const Nazarat = () => {
    return (
        <div className={clases.area}>
            <div className={clases.areas} >
                <Image src={start} />
                <Image src={sanj} />
                <Image src={nam} />
                <Image src={lab} />
            </div>
            <br></br>
            <div className={clases.areass}>
                <span>نجربه خرید خود را بنویسید...</span>
            </div>
            <div className="row col-12">
                <div className={clases.aread}>
                    <Image src={sstars} />
                    <Image src={sstars} />
                    <Image src={sstars} />
                    <Image src={sstar} />

                </div>
                <div>
                    <button type="text" className={clases.bitnss}>ارسال نظر </button>
                </div>

            </div>
        </div>


    )

}
export default Nazarat;