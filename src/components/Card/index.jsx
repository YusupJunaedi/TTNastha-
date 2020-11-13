import React from 'react'
import imgCard from '../../assets/images/meeting.jpg'
import logoPlace from '../../assets/images/placeholder.png'
import logoUser from '../../assets/images/user.png'
import './style.css'

const Card = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-6">
                    <div class="card">
                        <img src={imgCard} class="card-img-top" alt="image card" />

                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <div className="align-items-center">
                                    <img src={logoPlace} alt="placeholder" className="logo-place" />
                                    <span class="text-place pl-1">Pesangan Timur, Jakarta</span>
                                </div>
                                <div className="text-meeting">
                                    <h4>Meeting With CEO</h4>
                                    <p>13 november 2020</p>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div className="row d-flex">
                                    <div className="col-md-4 d-flex">
                                        <div className="d-flex flex-row align-items-center">
                                            <img src={logoUser} alt="placeholder" className="logo-user" />
                                            <span className='text-name'>Rio Janadi</span>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex">
                                        <div className="d-flex flex-row align-items-center">
                                            <img src={logoUser} alt="placeholder" className="logo-user" />
                                            <span className='text-name'>Rio Janadi</span>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex">
                                        <div className="d-flex flex-row align-items-center">
                                            <img src={logoUser} alt="placeholder" className="logo-user" />
                                            <span className='text-name'>Rio Janadi</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item bg-note">
                                <h6>Note:</h6>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias blanditiis dolor cumque quisquam obcaecati mollitia, ab incidunt molestiae nesciunt unde doloribus, illum recusandae quas odio autem aperiam nostrum, sint quia!</p>
                            </li>
                        </ul>



                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card
