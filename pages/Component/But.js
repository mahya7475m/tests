import React, { useState } from 'react';
import Image from "next/image";
import clases from "../Footer/footer.module.css";
import Link from 'next/link'
import axios from 'axios'
import { Button, Modal } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
const But = ({ id }) => {

    const [Violation, setViolation] = useState({
        frkInfoBank: '',
        message: '',
    });
    const fetchAllviolation = async () => {
        const { data } = await axios.get('/api/info/bank/claim:id', {
            withCredentials: true,
        });
        return data;
    };
    
    const { data: violation } = useQuery(['violation'], fetchAllviolation);
    const CatGORYA = violation && violation.map((itm) => {
        return (
            <>
                <option value={itm.id} key={itm.id}>{itm.title}</option>
            </>
        )
    })


    const cng = (e) => {
        setViolation({ ...Violation, message: e.target.value });
    };
    const cng1 = (e) => {
        setViolation({ ...Violation, violationCat: e.target.value })
    }
    async function createnote(viol) {
        try {
            let { data } = await axios.post('https://iranchemi.com/api/claim/info/bank', viol, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'appliacation/json' }

            });
            return data;
        } catch (error) {
            swal('در حال حاضر امکان پذیر نیست');
        }
    }
    const queryClient = useQueryClient();

    const mutation = useMutation(createnote, {
        onSuccess: (viols) => {
            queryClient.setQueryData(['violation', id], viols);
            toast.success('یادداشت شما با موفقیت ثبت شد', {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        },
        onError: () => {
            toast.error('مشکلی رخ داده است لطفا دوباره تلاش کنید', {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        },
    });
    const submitHndl = async (e) => {
        e.preventDefault();
        mutation.mutate(Violation);
    };
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='justify-content-between my-3 row'>
            <div className='col-4'><button type="button" className={`${clases.btns}`} ><span>دانلود کاتالوگ</span> </button></div>
            <div className='col-4'><button type="button" className={`${clases.btns}`} > آگهی های این کسب و کار</button></div>
            <div className='col-4' > <Button type="button" className={`${clases.btns} `} onClick={handleShow}>
                صاحب این کسب و کار هستم
           </Button></div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>  <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                        گزارش خود را ثبت کنید..
          </p></Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form onSubmit={submitHndl}>
                        <div className="form-control">
                            <label htmlFor="users">User:</label>
                            <input
                                type="text"
                                placeholder="گزارش  خود را بنویسید.."
                                name="title"
                                required
                                type="text"
                                className={clases.bt}
                                id="pasword"
                                value={Violation.violationCat}
                                onChange={(e) => cng1(e)}>
                            </input>
                        </div>

                        <div className="form-control">
                            <label htmlFor="pass">password:</label>
                            <input type="text"
                                placeholder="گزارش  خود را بنویسید.."
                                name="title"
                                required
                                type="text"
                                className={clases.bt}
                                id="pasword"
                                value={Violation.title}
                                onChange={(e) => cng(e)}>
                            </input>
                        </div>
                        <Modal.Footer>
                            <Button
                                variant="flat"
                                size="md"
                                type="submit"
                                onClick={handleClose} >
                                Save Changes
                       </Button>
                        </Modal.Footer>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}
export default But;

