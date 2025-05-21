import React from 'react';
import styled from 'styled-components';

interface BlobCardProps {
  children?: React.ReactNode;
  blobColor?: string;
  width?: string;
  height?: string;
}

const BlobCard = ({ 
  children, 
  blobColor = "#ad8b72", 
  width = "200px", 
  height = "250px" 
}: BlobCardProps) => {
  return (
    <StyledWrapper $blobColor={blobColor} $width={width} $height={height}>
      <div className="card">
        <div className="bg" />
        <div className="blob" />
        {children && <div className="content">{children}</div>}
      </div>
    </StyledWrapper>
  );
}

interface StyledWrapperProps {
  $blobColor: string;
  $width: string;
  $height: string;
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .card {
    position: relative;
    width: ${props => props.$width};
    height: ${props => props.$height};
    border-radius: 14px;
    z-index: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  }

  .bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    z-index: 2;
    background: rgba(255, 255, 255, .95);
    backdrop-filter: blur(24px);
    border-radius: 10px;
    overflow: hidden;
    outline: 2px solid white;
  }

  .blob {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: ${props => props.$blobColor};
    opacity: 1;
    filter: blur(12px);
    animation: blob-bounce 5s infinite ease;
  }

  .content {
    position: relative;
    z-index: 3;
    padding: 1rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @keyframes blob-bounce {
    0% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }

    25% {
      transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }

    50% {
      transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }

    75% {
      transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }

    100% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  }
`;

export default BlobCard; 