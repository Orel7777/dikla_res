import React from 'react';
import styled from 'styled-components';

interface CardImageProps {
  imageUrl: string;
  alt?: string;
}

const CardImage = ({ imageUrl, alt = 'תמונה' }: CardImageProps) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="bg">
          <img
            src={imageUrl}
            alt={alt}
            className="image"
          />
        </div>
        <div className="blob" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 240px;
    height: 320px;
    border-radius: 14px;
    z-index: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 20px 20px 60px rgba(173, 139, 114, 0.3), -20px -20px 60px rgba(254, 251, 232, 0.5);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    
    &:hover {
      transform: translateY(-10px);
      box-shadow: 25px 25px 70px rgba(173, 139, 114, 0.4), -25px -25px 70px rgba(254, 251, 232, 0.6);
      
      .blob {
        filter: blur(10px);
        opacity: 0.8;
      }
    }
  }

  .bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    z-index: 2;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(24px);
    border-radius: 10px;
    overflow: hidden;
    outline: 2px solid white;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    transform: scale(0.98);
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1);
    }
  }

  .blob {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #ad8b72;
    opacity: 0.7;
    filter: blur(15px);
    animation: blob-bounce 8s infinite ease;
    transition: filter 0.3s ease, opacity 0.3s ease;
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

export default CardImage; 