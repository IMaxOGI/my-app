import React, { useState, useEffect } from 'react';
import logoIcon from '../../assets/img/shield.png';
import { io, Socket } from 'socket.io-client';

const TopMenu: React.FC = () => {
    const [dateTime, setDateTime] = useState<Date>(new Date());
    const [activeSessions, setActiveSessions] = useState<number>(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    useEffect(() => {
        const socket: Socket = io("http://localhost:3001");
        socket.on("activeSessions", (data: number) => {
            setActiveSessions(data);
        });
        return () => {
            socket.disconnect();
        };
    }, []);

    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const dayName = days[dateTime.getDay()];

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <div>
                    <img className="img-fluid" src={logoIcon} alt="" width="55" height="55"/>
                    <a className="navbar-brand ps-2" href="#">Inventory</a>
                </div>
                <div className="collapse navbar-collapse ms-3">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        </form>
                    </ul>
                    <div>
                        <p className="fs-6 text-start mb-2">{dayName}</p>
                        <div className="d-flex">
                            <p className="fs-6 mb-2">{dateTime.toLocaleDateString()}</p>
                            <p className="fs-6 mb-2 ps-3"><i className="bi bi-clock"></i> {dateTime.toLocaleTimeString()}</p>
                            <p className="fs-6 ps-3 mb-2">Active sessions: {activeSessions}</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default TopMenu;
