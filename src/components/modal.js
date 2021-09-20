import React from 'react';
import styled from 'styled-components';
import Button from './button';

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 99999;

  display: flex;
  justify-content: center;
  align-items: center;

  .modal-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 20px 20px;
    position: relative;
    max-width: 450px;
    width: 100%;

    .modal-title {
      position: relative;
      font-weight: var(--semiBold);
      width: 100%;
      text-align: center;
      text-transform: capitalize;

      &::before {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 100%;
        border-bottom: 1px solid #cecece;
      }
    }

    .button {
      height: 50px;
      width: 100%;
    }
  }

  .close {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 28px;
    width: 24px;
    height: 24px;
    transform: rotate(45deg);

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      border-bottom: 2px solid var(--black);
    }

    &::after {
      content: '';
      position: absolute;
      height: 100%;
      border-left: 2px solid var(--black);
    }
  }
`;

export default function Modal({ children, title = '', onClick }) {
  return (
    <StyledModal>
      <div className="modal-wrapper basic">
        <button className="close" onClick={onClick} />
        <h2 className="modal-title">{title}</h2>
        {children}
        <Button type="submit" form="form" primary>
          {title}
        </Button>
      </div>
    </StyledModal>
  );
}
