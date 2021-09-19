import React from 'react';
import styled from 'styled-components';
import { BsChevronLeft as Left, BsChevronRight as Right } from 'react-icons/bs';
import {
  FiMoreVertical as More,
  FiSearch as Search,
  FiCheck as Check,
  FiStar as Star,
} from 'react-icons/fi';
import { GiRoundStar as FilledStar } from 'react-icons/gi';

const StyledIcon = styled.button`
  width: 26px;
  height: 26px;
  color: var(--blue);
  background-color: transparent;
  pointer-events: ${({ clickable }) => !clickable && 'none'};

  svg {
    width: 100%;
    height: 100%;
  }
`;

const whichIcon = (name) => {
  switch (name) {
    case 'left':
      return <Left />;
    case 'right':
      return <Right />;
    case 'more':
      return <More />;
    case 'search':
      return <Search />;
    case 'check':
      return <Check />;
    case 'star':
      return <Star />;
    case 'filledStar':
      <FilledStar />;
    default:
      return;
  }
};

export default function Icon({ name, clickable = true }) {
  return (
    <StyledIcon className="icon" clickable={clickable}>
      {whichIcon(name)}
    </StyledIcon>
  );
}
