import React from 'react';
import Image from "next/image";
import clases from "../Footer/footer.module.css";
import { useQuery } from "react-query";
import axios from "axios";
import Link from 'next/Link';


const fetchjobs = async () => {
  const { data } = await axios.get(`https://iranchemi.com/api/info/bank/14`);
  return data;
};

const Caption = () => {

  const { data: job } = useQuery('jobs', fetchjobs);
  console.log(job);

  return (
  
    <>




      <div className={clases.heads}>
        <div className={clases.heeads}>
          <span className={'fw-bold '}>توضیحات</span>
          <span className={clases.less}>
          
          
         {job && job.infoBank && job.infoBank.experience && job.infoBank.experience }
         


          </span>
        </div>
        <p className={clases.heeadp}>  {job && job.infoBank && job.infoBank.description && job.infoBank.description}   </p>
      </div>
      <div className={clases.heads}>
        <div className={clases.heeads}>
          <span className={'fw-bold'}>اهداف</span>
        </div>
        <p className={clases.heeadp}>{job && job.infoBank.purpose && job.infoBank.purpose} </p>

      </div>
    </>
  )

}
export default Caption
