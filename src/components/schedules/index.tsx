import React, { useEffect, useState } from 'react';
import { ScheduleList } from './style';
import Insta from '../../assets/insta.svg';
import Linkedin from '../../assets/linkedin.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';

import api from '../../services/api';


interface scheduleList {
    id: number,
    social_network_key: Array<number>,
    media: string,
    text: string,
    publication_date: Date,
    status: number,
}

const TableSchedule: React.FC = () => {

    const [schedules, setSchedules] = useState<scheduleList[]>([]);
    const [color,SetColor] = useState('');

    useEffect(() => {
        api.get('schedules').then(response => {
            setSchedules(response.data);
        });
    }, []);

     function getStatusColor<String>(id: number) {
        api.get(`status/${id}`).then(response => {
            SetColor(response.data.color);
        });
        return color;
    }

    function getNetwork<Boolean>(networks : Array<number>) {

        networks.map((network) => (
            console.log(network)
        ));

    }

  

    

    return (
        <ScheduleList id="simple-board">
            <table>
                <thead>
                    <th>Redes Sociais</th>
                    <th>Mídia</th>
                    <th>Texto</th>
                    <th>Data</th>
                    <th>Ações</th>
                    <th>Status</th>
                </thead>
                <tbody>
                    {schedules.map((item) => (
                        <tr key={item.id}>
                            <td className="icons">


                                <div className="insta">
                                    <img src={Insta} alt="network" />
                                </div>
                                <div className="linke">
                                    <img src={Linkedin} alt="network" />
                                </div>

                            </td>
                            <td className="media">
                                <img src={item.media} alt="Mídia" />
                            </td>
                            <td>{item.text}</td>
                            <td>
                                {
                                    format(new Date(item.publication_date), 'dd/MM/yyyy') + " às " +
                                    format(new Date(item.publication_date), 'H:ii')
                                }
                            </td>
                            <td><a href="/">Preview</a></td>
                            <td className="status">
                                <FontAwesomeIcon className="icon" color="red" icon={["fas", "coffee"]} />
                                <span>Agendado</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </ScheduleList>
    );
}

export default TableSchedule;