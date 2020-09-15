import styled from 'styled-components';

const remy = (px) => `${px / 16}rem`;

export const ProjectCard = styled.article`
  padding: ${remy(24)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${remy(300)};
  height: ${remy(400)};
  font-weight: bold;
  text-align: center;
`;
