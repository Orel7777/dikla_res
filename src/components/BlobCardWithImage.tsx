import React from 'react';
import styled from 'styled-components';

interface BlobCardWithImageProps {
  imageSrc: string;
  imageAlt?: string;
  blobColor?: string;
  width?: string;
  height?: string;
  children?: React.ReactNode;
}

const BlobCardWithImage = ({ 
  imageSrc, 
  imageAlt = '', 
  blobColor = "#ad8b72", 
  width = "200px", 
  height = "250px",
  children
}: BlobCardWithImageProps) => {
  return (
    <StyledWrapper $blobColor={blobColor} $width={width} $height={height}>
      <div className="card">
        <div className="bg" />
        <div className="blob" />
        <div className="content">
          <div className="image-container">
            <img src={imageSrc} alt={imageAlt} className="image" />
          </div>
          {children && <div className="caption">{children}</div>}
        </div>
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

  .image-container {
    width: 90%;
    height: 70%;
    overflow: hidden;
    border-radius: 8px;
    margin-bottom: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .card:hover .image {
    transform: scale(1.05);
  }

  .caption {
    text-align: center;
    font-size: 0.9rem;
    color: #5C4033;
    max-width: 90%;
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

export default BlobCardWithImage; 