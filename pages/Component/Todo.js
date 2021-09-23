import React from 'react';
import Image from "next/image";
import clases from "../../pages/Footer/footer.module.css";
import { useQuery } from "react-query";
import axios from "axios";
import Link from 'next/Link';

const fetchjobs = async () => {
    const { data } = await axios.get(`https://iranchemi.com/api/info/bank/comment/8`);
    return data;
};

const Todo = () => {
  
    const { data} = useQuery('todo', fetchjobs);
    console.log(data);


    return (
        <>
            <div className="my-2">
                <ul className={`nav nav-tabs pe-0 `} id="myTab" role="tablist" >
                    <li className={`nav-item`} role="presentation">
                        <button class={`nav-link active`} id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">نظرات</button>
                    </li>
                    <li class="nav-item border-5" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">پرسش و پاسخ</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">تجربه کاربری</button>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className={`row`}>
                            <div className={`col-1`}>
                                <Image src="/comment/12.png" autoPlay width={100} height={100} className='d-flex justify-content-bet' />
                            </div>
                            <div className={`col-11`}>
                                <span>Sara-Hamidi</span>
                                <p>سلام کسی می دونه چطور می شه رنگ ماهگونی  رو خودم درست کنم؟</p>
                                <Image className={`ps-2`} src="/comment/13.png" autoPlay width={20} height={20} />
                                <Image className={`ps-2`} src="/comment/14.png" autoPlay width={20} height={20} />
                                <Image src="/comment/15.png" autoPlay width={18} height={18} />

                                <div className={`float-start`}>
                                    <span className='ps-3'>گزارش تخلف</span>
                                    <span className='ps-3'>3روز پیش</span>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className={`row`}>
                            <div className={`col-1`}>
                                <Image src="/comment/11.png" autoPlay width={100} height={100} className='d-flex justify-content-bet' />
                            </div>
                            <div className={`col-11`}>
                                <span>Sara-Hamidi</span>
                                <p>سلام کسی می دونه چطور می شه رنگ ماهگونی  رو خودم درست کنم؟</p>
                                <Image className={`ps-2`} src="/comment/13.png" autoPlay width={20} height={20} />
                                <Image className={`ps-2`} src="/comment/14.png" autoPlay width={20} height={20} />
                                <Image src="/comment/15.png" autoPlay width={18} height={18} />
                                <div className={`float-start`}>
                                    <span className='ps-3'>گزارش تخلف</span>
                                    <span className='ps-3'>3روز پیش</span>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                </div>


            </div>
        </>
    )

}
export default Todo;
