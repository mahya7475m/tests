import React from 'react';
import clases from "../../pages/Footer/footer.module.css";
import loc from '../../public/icon/loc.png';
import tell from '../../public/icon/Vector21.png';
import faax from '../../public/icon/Vector1.png';
import webb from '../../public/icon/Vector4.png';
import emi from '../../public/icon/Vector5.png';
import posti from '../../public/icon/Vector6.png';
import ejtema from '../../public/icon/Vector7.png';
import moduleNamea from '../../public/majazi/1.png';
import moduleNameb from '../../public/majazi/2.png';
import moduleNamec from '../../public/majazi/3.png';
import moduleNamed from '../../public/majazi/4.png';
import moduleNamef from '../../public/majazi/5.png';
import { useQuery } from "react-query";
import axios from "axios";
import Link from 'next/Link';
import Image from 'next/image';


const fetchjobs = async () => {
    const { data } = await axios.get(`https://iranchemi.com/api/info/bank/13`);
    return data;
};

const Contact = () => {

    const { data: job } = useQuery('jobs', fetchjobs);
    console.log(job);

    return (
        <div className={clases.form}>
            <div className={clases.form}>
                <div className={clases.form2}>
                    اطلاعات تماس
                </div>

                <div className={`row pe-3 ps-3`}>
                    <div className={'col-3'}>
                        <Image src={loc} className=' mb-4px' />
                        <span className='p-2 '>آدرس:</span>
                    </div>
                    <div className={'col-9 mt-4'}>

                        <span className={clases.razavi} > {job && job.infoBank && job.infoBank.address && job.infoBank.address}</span>
                    </div>
                    <hr className={clases.hrs} />
                </div>


                <div className={`row pe-3 ps-3`}>
                    <div className={'col-3'}>
                        <Image src={tell} className=' mb-4px' />
                        <span className='p-2 '>تلفن:</span>
                    </div>
                    <div className={'col-9'}>
                        <span className={clases.razavi}>{job && job.infoBank && job.infoBank.phone && job.infoBank.phone}  </span>
                    </div>
                    <hr className={clases.hrs} />
                </div>
                <div className={' row pe-3 ps-3'}>
                    <div className={'col-3'}>
                        <Image src={faax} />
                        <span className='p-2'>فکس:</span>
                    </div>

                    <div className={'col-9'}>
                        <span className={clases.razavi}>{job && job.infoBank && job.infoBank.fax && job.infoBank.fax}</span>
                    </div>
                    <hr className={clases.hrs} />

                </div>
                <div className={`row pe-3 ps-3`}>
                    <div className={'col-3 '}>
                        <Image src={webb} />
                        <span className='p-1'>وب سایت:</span>
                    </div>
                    <div className={'col-9'}>
                        <span className={clases.veb} > {job && job.infoBank && job.infoBank.website && job.infoBank.website}</span>
                    </div>
                    <hr className={clases.hrs} />
                </div>
                <div className={`row pe-3 ps-3`}>
                    <div className={'col-3'}>
                        <Image src={emi} className=' mb-4px' />
                        <span className='p-1'> ایمیل:</span>
                    </div>
                    <div className={'col-9'}>
                        <span className={clases.veb}>{job && job.infoBank && job.infoBank.email && job.infoBank.email} </span>
                    </div>
                    <hr className={clases.hrs} />
                </div>
                <div className={' row pe-3 ps-3'}>
                    <div className={'col-3'}>
                        <Image className={clases.imga} src={posti} />
                        <span className='p-1 my-2'>کدپستی:</span>
                    </div>

                    <div className={'col-9'}>
                        <span className={clases.razavi}> {job && job.infoBank && job.infoBank.postalCode && job.infoBank.postalCode}</span>
                    </div>
                    <hr className={clases.hrs} />

                </div>
                <div className={' row pe-3 ps-3'}>
                    <div className={'col-5'}>
                        <Image src={ejtema} />
                        <span className='p-2'>صفحات اجتماعی:</span>
                    </div>

                    <div className={'col-7 d-flex justify-content-end ps-4 '}>

                        <Link href='#'><Image src={moduleNamea} alt="ax" /></Link>
                        <Link href='#'><Image src={moduleNameb} alt="ax" /></Link>
                        <Link href='#'><Image src={moduleNamec} alt="ax" /></Link>
                        <Link href='#'><Image src={moduleNamed} alt="ax" /></Link>
                        <Link href='#'><Image src={moduleNamef} alt="ax" /></Link>
                    </div>


                </div>
            </div>
        </div>)



}





export default Contact;