import React from 'react';
import { ScheduleList } from './style';
import Insta from '../../assets/insta.svg';
import Linkedin from '../../assets/linkedin.svg';
import Status from '../../assets/status.svg';


const TableSchedule: React.FC = () => {
   
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
                        <tr>
                            <td className="icons">
                                <div className="insta">
                                    <img src={Insta} alt="network" />
                                </div>
                                <div className="linke">
                                    <img src={Linkedin} alt="network" />
                                </div>
                            </td>
                            <td className="media">
                                <img src={Status} alt="Mídia" />
                            </td>
                            <td>vamos que vamos rapaziada, tamo junto federal</td>
                            <td>07/06/2020 07:24</td>
                            <td><a href="/teste">Preview</a></td>
                            <td className="status">
                                 <img src={Status} alt="status" />
                                 <span>Agendado</span>
                            </td>
                        </tr> 
                        <tr>
                            <td className="icons">
                                <div className="insta">
                                    <img src={Insta} alt="network" />
                                </div>
                            </td>
                            <td className="media">
                                <img src={Status} alt="Mídia" />
                            </td>
                            <td>vamos que vamos rapaziada, tamo junto federal</td>
                            <td>07/06/2020 07:24</td>
                            <td><a href="/teste">Preview</a></td>
                            <td className="status">
                                 <img src={Status} alt="status" />
                                 <span>Agendado</span>
                            </td>
                        </tr> 
                    </tbody>
                    </table>
                </ScheduleList>
  );
}

export default TableSchedule;