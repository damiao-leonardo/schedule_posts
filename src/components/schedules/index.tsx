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
    status: string,
    networks: Array<networkList>,
}

interface networkList {
    id: number,
    name: string,
    icon: string,
    status: string,
}

const TableSchedule: React.FC = () => {

    const [schedules, setSchedules] = useState<any[]>([]);
    const [color, SetColor] = useState('');
    const [network, SetNetwork] = useState<networkList[]>([]);

    useEffect(() => {
        api.get('social-networks').then(response => {
            SetNetwork(response.data);
        });

    }, []);

    useEffect(() => {
        const asdf = async () => {
            const response = await api.get<scheduleList[]>('schedules');
            const listSchedules = response.data.map(schedule => {
                const list = schedule.social_network_key.map(network_id => {
                    return network.find(net => net.id === network_id);
                });
                return {
                    ...schedule,
                    networks: list,
                }
            });
            setSchedules(listSchedules);
        }
        if (network.length > 0)
            asdf();

    }, [network]);


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
                    {
                        (schedules.length > 0) ?
                            schedules.map((item) => (
                                <tr key={item.id}>
                                    <td className="icons">
                                        {item.networks.map((net: networkList) => {
                                            return (
                                                <div className={net.name}>
                                                    <img src={Insta} alt={net.name} />
                                                </div>
                                            )
                                        })}
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
                            )) : <></>}
                </tbody>
            </table>
        </ScheduleList>
    );
}

export default TableSchedule;