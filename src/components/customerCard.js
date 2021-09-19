import React from 'react';
import styled from 'styled-components';
import Button from './button';
import Icon from './icon';

const StyledCustomerCard = styled.li`
  position: relative;
  list-style: none;
  height: 200px;
  border-radius: var(--borderRadius);
  border: 1px solid var(--shadowColor);
  padding: 20px;
  overflow: hidden;

  .full-name {
    font-size: 20px;
    font-weight: var(--semiBold);
    margin-bottom: 10px;
  }

  .phone-number {
    font-size: 16px;
    font-weight: var(--light);
  }

  .button,
  .icon {
    position: absolute;
    --position: 20px;
  }

  .button {
    bottom: var(--position);
    left: var(--position);
  }

  .icon {
    top: var(--position);
    right: var(--position);
  }

  .svg {
    position: absolute;
    bottom: -5px;
    right: -5px;
    fill: var(--blue);
  }
`;

const Svg = ({ className }) => {
  return (
    <svg
      className={className}
      width="146"
      height="134"
      viewBox="0 0 103 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.05614 34.5C-3.72817 52.5513 1.72281 77.8333 5.05614 91H101.056L102.056 1C93.5562 3.33333 72.3562 8.7 55.5562 11.5C34.5562 15 20.7652 17.967 9.05614 34.5Z"
        stroke="none"
      />
    </svg>
  );
};

export default function CustomerCard() {
  return (
    <StyledCustomerCard className="basic">
      <div className="customer-title">
        <p className="full-name">Anna Nowak</p>
        <p className="phone-number">+48 500 600 700</p>
      </div>
      <Svg className="svg" />
      <Icon name="more" />
      <Button secondary>umów wizytę</Button>
    </StyledCustomerCard>
  );
}
