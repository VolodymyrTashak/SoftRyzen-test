import styled from 'styled-components'; 

export const EventsBox = styled.div`
padding-top: 60px;
padding-bottom: 32px;
`;

export const EventsList = styled.ul`
display: grid;
grid-column-gap: 24px;
grid-row-gap: 40px;
grid-template-columns: repeat(4,1fr);
`;