import React from 'react';
import { Header, Container } from './style';
import { Link } from 'react-router-dom';
import TableSchedule from '../../components/schedules';

const Schedule: React.FC = () => {
    return (
        <section>
            <Header>
                <span>Listagem de Agendamento</span>
                <div><Link to="/post">Novo Agendamento</Link></div>
            </Header>
            <Container>
                <TableSchedule />
            </Container>
        </section>
    );
};

export default Schedule;