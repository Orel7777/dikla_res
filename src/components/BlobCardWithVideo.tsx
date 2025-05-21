import React from 'react';
import styled from 'styled-components';

interface BlobCardWithVideoProps {
  videoSrc: string;
  blobColor?: string;
  width?: string;
  height?: string;
  children?: React.ReactNode;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  overlay?: boolean;
  overlayText?: string;
}

const BlobCardWithVideo = ({ 
  videoSrc, 
  blobColor = "#ad8b72", 
  width = "200px", 
  height = "250px",
  children,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  overlay = false,
  overlayText = ""
}: BlobCardWithVideoProps) => {
  return (
    <StyledWrapper 
      $blobColor={blobColor} 
      $width={width} 
      $height={height}
      $hasOverlay={overlay}
    >
      <div className="card">
        <div className="bg" />
        <div className="blob" />
        <div className="content">
          <video 
            src={videoSrc} 
            className="video" 
            autoPlay={autoPlay}
            loop={loop}
            muted={muted}
            playsInline={playsInline}
          />
          {overlay && (
            <div className="video-overlay">
              <span>{overlayText}</span>
            </div>
          )}
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
  $hasOverlay: boolean;
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
    box-shadow: 20px 20px 60px rgba(101, 109, 85, 0.15), -20px -20px 60px rgba(255, 255, 255, 0.8);
  }

  .bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    z-index: 2;
    background: rgba(255, 255, 255, .2);
    backdrop-filter: blur(24px);
    border-radius: 10px;
    overflow: hidden;
    outline: 2px solid #fefbe8;
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
    position: absolute;
    inset: 5px;
    z-index: 3;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: fill;
    transition: transform 0.3s ease;
  }

  .card:hover .video {
    transform: scale(1.02);
  }

  .video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(101, 109, 85, 0.3), rgba(152, 162, 125, 0.2));
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${props => props.$hasOverlay ? 0.7 : 0};
    transition: opacity 0.3s ease;
  }

  .video-overlay span {
    color: #ffffff;
    font-size: clamp(1rem, 4vw, 1.5rem);
    font-weight: 700;
    text-align: center;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
    background-color: rgba(101, 109, 85, 0.7);
    padding: 0.5rem clamp(1rem, 3vw, 1.5rem);
    border-radius: 50px;
    max-width: 90%;
    transform: translateY(0);
    opacity: 0;
    transition: all 0.5s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  .card:hover .video-overlay {
    opacity: ${props => props.$hasOverlay ? 1 : 0};
  }

  .card:hover .video-overlay span {
    opacity: 1;
    transform: scale(1.05);
  }

  .caption {
    position: absolute;
    bottom: 10px;
    text-align: center;
    font-size: 0.9rem;
    color: #5C4033;
    max-width: 90%;
    z-index: 10;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 0.5rem 1rem;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    .card {
      border-radius: 12px;
    }
    
    .bg {
      border-radius: 8px;
    }
    
    .content {
      border-radius: 8px;
    }
    
    .video-overlay span {
      padding: 0.4rem 1rem;
    }
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

export default BlobCardWithVideo; 