import styled from 'styled-components';

export const Description = styled.div`
display: block;
text-align: center;
margin-top: 30px;
padding: 5px
background-color:${p => p.theme.colors.secondary};
box-shadow: 5px 5px 15px 5px #00000063;
border-radius: 50px;
align-items: center;
justify-content: center;`;

export const Avatar = styled.img`
width: 14vw;
margin-top: 4vw;`;

export const Username = styled.p`
color: ${p => p.theme.colors.yellow};
margin-top: ${p => p.theme.space[5]};
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.l}`;

export const Tag = styled.p`
color: ${p => p.theme.colors.yellow};
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.m};`;

export const Location = styled.p`
color: ${p => p.theme.colors.yellow};
font-size: ${p => p.theme.fontSizes.m};`;

export const Stats = styled.ul`
display: flex;
flex-basis: calc(100% / 3);
padding: ${p => p.theme.space[3]}px;`;

export const StatsItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
flex-basis: calc(100% / 3);
padding: ${p => p.theme.space[2]}px;
color: ${p => p.theme.colors.white};
`;

export const Label = styled.span`
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.s};
line-height: 1.8;`;

export const Quantity = styled.span`
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.s};
line-height: 1.8;`;


