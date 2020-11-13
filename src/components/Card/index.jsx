import React from 'react'
import imgCard from '../../assets/images/meeting.jpg'
import logoPlace from '../../assets/images/placeholder.png'
import logoUser from '../../assets/images/user.png'
import './style.css'
import { useSelector } from 'react-redux';

const Card = () => {

    const events = useSelector(state => state.event.list)

    return (
        <div className="container-main">
            <div className="container">
                <div className="row">

                    {
                        events.map(e => {
                            return <div className="col-md-4 col-12 mt-3">
                                <div class="card mh">
                                    <img src={imgCard} class="card-img-top" alt="image card" />
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <div className="align-items-center">
                                                <img src={logoPlace} alt="placeholder" className="logo-place" />
                                                <span class="text-place pl-1">{e.location}</span>
                                            </div>
                                            <div className="text-meeting">
                                                <h4>{e.title}</h4>
                                                <p>{e.date}</p>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div className="row d-flex">
                                                {
                                                    e.participant.split(',').map(p => {
                                                        return <div className="col-md-4 col-4 d-flex">
                                                            <div className="d-flex flex-row align-items-center">
                                                                <img src={logoUser} alt="placeholder" className="logo-user" />
                                                                <span className='text-name'>{p}</span>
                                                            </div>
                                                        </div>
                                                    })
                                                }




                                            </div>
                                        </li>
                                        <li class="list-group-item bg-note">
                                            <h6>Note:</h6>
                                            <p>{e.note}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        })
                    }






                </div>




            </div>

        </div>


    )
}

export default Card
