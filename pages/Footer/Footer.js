import clases from "./footer.module.css";
import Link from 'next/Link';
import Image from 'next/image';
import Contact from "../Component/Contact"
import MySwiper from "../Component/MySwiper";
import moduleNamee from '../../public/comment/11.png';

import moduleNamen from '../../public/comment/15.png';
import moduleNamel from '../../public/comment/16.png';
import moduleNamej from '../../public/comment/12.png';
import moduleNamehhh from '../../public/area/20.png';
import moduleNamemmmm from '../../public/area/21.png';
import moduleNamell from '../../public/head/40.png';
import Coin from '../Footer/Coin';

import img from '../../public/comment/blue.png'
import SwiperClip from "../Component/swiperClip";
import But from "../Component/But";
import Caption from '../Component/Caption'
import Todo from '../Component/Todo'
import React, { useRef, useState, useEffect } from "react";
import Nazarat from '../Component/Nazarat'
import axios from 'axios'

const footer = () => {
    const [state, setstate] = useState([])
    const [search, setsearch] = useState('')
    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1$sparkline=false  ')
            .then(res => {
                setstate(res.data)
                console.log(res.data)
            })
            .catch(error => alert('noooooo url')

            )
    }, []);

    const hendlechange = e => {
        setsearch(e.target.value)
    }

    const filteredCoines = state.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className="container-fluid">
            <br></br>
            <div className="row " dir="ltr">
                <div className="coin-app">
                    <div className="coin-search">
                        <h1 className="coin-text">Search</h1>
                        <form>
                            <input type="text" placeholder="search" onChange={hendlechange} />

                        </form>
                    </div>
                    {filteredCoines.map(coin => {
                        return (
                            <Coin
                                key={coin.id}
                                name={coin.name}
                                image={coin.image}
                                symbol={coin.symbol}
                                volume={coin.market_cap}
                                price={coin.current_price}
                                priceChange={coin.price_Change_perfectag_24h}
                                marketcap={coin.total_volume}
                            />
                        )
                    })}
                </div>
                <div className={`col-md-3 mb-2`}>
                    <MySwiper />
                    <SwiperClip />
                </div>

                <div className="col-md-6" dir="rtl">
                    <Contact />
                    <But />
                    <Caption />
                    <Todo />
                    <Nazarat />

                </div>
                <div className="col-md-3" dir="rtl">

                    <div className="col-sm-12">
                        <div className={clases.card_one}>
                            <div className={clases.para}>
                                <p>فروشنده محصول</p>
                            </div>
                            <div className={clases.container}>
                                <div className={clases.section_right}>
                                    <Image width={70} height={70} src={img} className={clases.img_card} />
                                </div>
                                <div className={clases.section_left}>
                                    <p>مزون خانم گل</p>
                                    <span>يك سال و 2 ماه و 3 روز با بيلبورد</span>
                                    <div className={clases.container_spans}>
                                        <span>امتياز 4.8 از 5</span>
                                        <span>رضايت 100% مشتری</span>
                                    </div>
                                </div>
                            </div>
                            <div className={clases.footer_card}>
                                <p>ارتباط با صاحب كسب و كار</p>
                            </div>
                        </div>
                    </div>


                    <div className={clases.map} >
                        <div className={clases.map_card}>
                            <div className={clases.map_card_section_right}>
                                <Image src="/hamlonaghl/51.png" width={50} height={50} />
                            </div>
                            <div className={clases.map_card_section_left}>
                                <p>نزديكترين خط مترو</p>
                                <p>ايستگاه طالقانی</p>
                                <p>25 متر</p>
                            </div>
                        </div>
                        <div className={clases.map_card}>
                            <div className={clases.map_card}>
                                <div className={clases.map_card_section_right}>
                                    <Image src="/hamlonaghl/53.png" width={50} height={50} />
                                </div>
                                <div className={clases.map_card_section_left}>
                                    <p>نزديكترين خط مترو</p>
                                    <p>ايستگاه طالقانی</p>
                                    <p>25 متر</p>
                                </div>
                            </div>
                        </div>
                        <div className={clases.map_card}>
                            <div className={clases.map_card}>
                                <div className={clases.map_card_section_right}>
                                    <Image src="/hamlonaghl/52.png" width={50} height={50} />
                                </div>
                                <div className={clases.map_card_section_left}>
                                    <p>نزديكترين خط مترو</p>
                                    <p>ايستگاه طالقانی</p>
                                    <p>25 متر</p>
                                </div>
                            </div>
                        </div>
                        <div className={clases.map_card}>
                            <div className={clases.map_card}>
                                <div className={clases.map_card_section_right}>
                                    <Image src="/hamlonaghl/53.png" width={50} height={50} />
                                </div>
                                <div className={clases.map_card_section_left}>
                                    <p>نزديكترين خط مترو</p>
                                    <p>ايستگاه طالقانی</p>
                                    <p>25 متر</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={clases.word}>
                        <div>
                            <span>کلمات کلیدی</span>
                        </div>
                        <div className={clases.words} >
                            <button className={clases.words} >مو</button>
                            <button className={clases.words}>ناحن</button>
                            <button className={clases.words}>ماساژ</button>
                        </div>
                        <div className={clases.words} >
                            <button className={clases.words} >ابرو</button>
                            <button className={clases.words}>پرایمر</button>
                            <button className={clases.words}>سایه</button>
                        </div>
                        <div className={clases.words} >
                            <button className={clases.words} >کانلسیلر</button>
                            <button className={clases.words}>هایلایت</button>
                            <button className={clases.words}>ارتیست</button>
                        </div>

                        <div className={clases.words} >
                            <button className={clases.words} >زیبایی</button>
                            <button className={clases.words}>سالن</button>
                            <button className={clases.words}>پوست</button>
                        </div>
                        <div className={clases.words} >
                            <button className={clases.words} >blogger</button>
                            <button className={clases.words}>makeup</button>
                            <button className={clases.words}>lip</button>
                        </div>
                        <div className={clases.words} >
                            <button className={clases.words} >لیزر</button>
                            <button className={clases.words}>بلیدینگ</button>
                            <button className={clases.words}>عروس</button>
                        </div>


                    </div>
                    <div className={`${clases.mati} row`}>
                        <span className={'text-end fs-5 fw-bold py-3  '}>مفالات مرتبط</span>
                        <div className={'col-3'}>
                            <Image className="mx-2" src="/comment/red.png" alt="ax" width="80" height="100" />
                        </div>
                        <div className={'col-9 p-0'}>
                            <span className={clases.matlabsis}>محبوب ترین عنوان ها</span>
                            <span className={clases.matlabsiss}>محبوب ترین عنوان ها</span>
                            <span className={clases.matlabsiss}>محبوب ترین عنوان ها</span>

                        </div>

                        <hr />
                        <div className={'col-3'}>
                            <Image className="mx-2" src="/comment/blue.png" alt="ax" width="80px" height="100px" />

                        </div>
                        <div className={'col-9 p-0'}>
                            <span className={clases.matlabsis}>محبوب ترین عنوان ها</span>
                            <span className={clases.matlabsiss}>محبوب ترین عنوان ها</span>
                            <span className={clases.matlabsiss}>محبوب ترین عنوان ها</span>

                        </div>
                    </div>




                </div>


            </div >
        </div >





    )

}



export default footer;


















// className App extends React.component {
//     state = {
//         product: [
//             { title: 'book', price: 2500 },
//             { title: 'book2', price: 25020 }

//         ]
//     };
//     addbenana() {
//         const benna = { title: 'boliii', price: 540 };
//         this.setState({ product: [...this.state.product, benna] })
//     }
//     mosi(e) {
//         console.log(e.target, e.pageX)
//     }
//     render() {
//         return (
//             <div classNameName="content" onMouseOver={this.mosi}>
//                 <button onClick={() => this.addbenana()} >add benana</button>
//                 {
//                     this.state.product.map((item, index) => <proo title={item.title} price={item.price} key={index} />)

//                 }
//             </div >;
//     }
// }

// function proo(item) {
//     return <div>
//         <h2>{item.title}</h2>
//     </div>
// }
// export default App;

