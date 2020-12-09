import React, { useEffect, useState } from 'react';
import { ScheduleList } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { findIconDefinition, IconLookup } from '@fortawesome/fontawesome-svg-core';
import { format } from 'date-fns';

import api from '../../services/api';

interface scheduleList {
    id: number,
    social_network_key: Array<number>,
    media: string,
    text: string,
    publication_date: Date,
    status_key: {},
    networks: Array<networkList>,
}

interface networkList {
    id: number,
    name: string,
    icon: string,
    status: string,
}

interface statusList {
    id: number,
    name: string,
    color: string,
}

const TableSchedule: React.FC = () => {

    const [schedules, setSchedules] = useState<any[]>([]);
    const [status, SetStatus] = useState<statusList[]>([]);
    const [network, SetNetwork] = useState<networkList[]>([]);

    useEffect(() => {

        api.get('status').then(response => {
            SetStatus(response.data);
        });

        api.get('social-networks').then(response => {
            SetNetwork(response.data);
        });
    }, []);

    useEffect(() => {
        const getSchedules = async () => {
            const response = await api.get<scheduleList[]>('schedules');
            const listSchedules = response.data.map(schedule => {
                const listNetworks = schedule.social_network_key.map(network_id => {
                    return network.find(net => net.id === network_id);
                });
                const listStatus = status.find(item => item.id === schedule.status_key)
                return {
                    ...schedule,
                    networks: listNetworks,
                    status: listStatus
                }
            });
            setSchedules(listSchedules);
        }
        if (network.length > 0 && status.length > 0)
            getSchedules();

    }, [network, status]);

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
                    {schedules && (schedules.length > 0) && schedules.map((item) => (
                        <tr key={item.id}>
                            <td className="icons">
                                {item.networks.map((net: networkList) => {
                                    console.log(net);
                                    return (
                                        <div key={net.id} className={net.name}>
                                            <FontAwesomeIcon color="white" className="icon" icon={findIconDefinition({ prefix: 'fab', iconName: net.icon } as IconLookup)} />
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
                                <FontAwesomeIcon className="icon" color={item.status.color} icon={["fas", "circle"]} />
                                <span>{item.status.name}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </ScheduleList>
    );
}

export default TableSchedule;