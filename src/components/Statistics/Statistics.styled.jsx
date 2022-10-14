import styled from 'styled-components';

export const Title = styled.h2`
padding: ${p => p.theme.space[4]}px;
text-align: center;
font-weight:${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.l};
background-color: ${p => p.theme.colors.background};
box-shadow: 5px 5px 15px 5px #00000063;
// border-radius: 40px 40px;
margin-block: 0;
`;

export const StatList = styled.ul`
display: flex;
justify-content: center;

padding-inline-start: 0;
margin-block: 0;
box-shadow: 5px 5px 15px 5px #00000063;
// border-radius: 50px;`;

export const StatItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
padding: ${p => p.theme.space[4]}px;
background-color: ${props => props.backgroundColor};
// &:first-child {
// border-radius: 30px 0 0 30px;
// }
// &:last-child {
// border-radius: 0 30px 30px 0;
}`;

export const StatLabel = styled.span`
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.s};
line-height: 1.8;`;

export const StatPercentage = styled.span`
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.s};
line-height: 1.8;`;

