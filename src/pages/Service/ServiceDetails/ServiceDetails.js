import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useCar from '../../../hooks/useCar';
import { AiFillHome } from "react-icons/ai";
import { BsFillCartCheckFill } from 'react-icons/bs';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import air from '../../../images/car/air-con.svg';
import body from '../../../images/car/body-type-sedan.svg';
import condition from '../../../images/car/condition.svg';
import driver from '../../../images/car/drive-type.svg';
import fuel from '../../../images/car/fuel-type.svg';
import gear from '../../../images/car/gearbox.svg';
import mile from '../../../images/car/mileage.svg';
import year from '../../../images/car/year.svg';
import engine from '../../../images/car/engine.svg';
const ServiceDetails = () => {
    const { serviceId } = useParams();
    const history = useHistory();
    const { car, isLoadingCar } = useCar();
    const [currentService, setCurrentService] = useState({});
    //console.log('car ', car, serviceId, currentService);
    useEffect(() => {
        setCurrentService(car.find(x => x.id === serviceId));
    }, [car, serviceId]);

    return (
        isLoadingCar === false
            ?
            <div className='mt-5 pt-4'>
                <div className=''>
                    <h2 className='border-bottom text-center fw-bold py-3'>About <span className='text-primary'>{currentService?.name}</span> </h2>
                    <div className='mx-3 mt-3  text-center' >
                        <img src={currentService?.img} alt={" image of " + currentService?.name} width='75%' className='rounded' />
                    </div>
                   
                    <div className='py-2 px-3'>
                        <h5 className=' fw-bold text-center'>
                            Price: <span className='text-warning'>{currentService?.price} ৳</span>
                        </h5>
                    </div>
                    <div className='py-2 px-3'>
                        <h5 className=' fw-bold text-center'>
                            Description: <span className='text-muted font-weight-light'>{currentService?.description}</span>
                        </h5>
                    </div>
                </div>
                <div className='py-4 text-center '>
                    <Button variant='btn-outline-danger'  onClick={() => { history.push('/home') }} className='ms-2 btn-outline-danger' >
                        Go Back to
                        
                    </Button>
                    <Button variant='btn-outline-danger' onClick={() => { history.push(`/order/${currentService?.id}`) }} className='ms-4 btn-outline-danger' >
                        Purchase
                        <BsFillCartCheckFill className='ps-2 fs-3' />
                    </Button>
                </div>
            </div>
            :
            <div className='mt-5 pt-5 text-center' style={{ height: '100vh' }}>
                <Spinner animation='grow'></Spinner>
            </div>
    );
};

export default ServiceDetails;