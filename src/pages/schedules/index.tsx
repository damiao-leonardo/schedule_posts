import React from 'react';
import { Title, Container } from './style';
import TableSchedule from '../../components/schedules';

const Schedule: React.FC = () => {

    return (
        <section>
            <Title>
                <span>Listagem de Agendamento</span>
            </Title>
            <Container>
               <TableSchedule /> 
            </Container>
        </section>
    );
};

export default Schedule;