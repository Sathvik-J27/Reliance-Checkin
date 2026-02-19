import React from 'react';
import logo from 'figma:asset/5ebff9a217654d307f5ff0e6abe952a2f7edba47.png';
import eagleDesktopImage from 'figma:asset/f72178f30a0dde70a8d75f3484b9afe145cb6b4a.png';
import eagleMobileImage from 'figma:asset/ce4e08efbf373b6ac47b975a612b62ba9dbdfad0.png';

interface HomePageProps {
  onCustomerCheckIn: () => void;
  onStaffLogin: () => void;
  onRevisit: () => void;
  onStaff2Login?: () => void;
}

export function HomePage({ onCustomerCheckIn, onStaffLogin, onRevisit }: HomePageProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Animated Eagle Background - Desktop Only (fills right side) */}
      <div className="hidden lg:flex absolute" style={{ 
        right: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '45%',
        height: '85%',
        zIndex: 5,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <img 
          src={eagleDesktopImage} 
          alt="Eagle" 
          className="eagle-wings"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center',
            opacity: 0.35,
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 sm:px-8 lg:px-12 py-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Reliance Surfaces" className="w-10 h-10 object-contain" />
          <span className="text-lg sm:text-xl font-medium text-white">
            Reliance Surfaces
          </span>
        </div>
        <div className="flex items-center gap-6 sm:gap-8">
          <a
            href="https://reliancesurfaces.com/shop/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base transition-colors text-gray-400 hover:text-white"
          >
            Slabs
          </a>
          <button
            onClick={onStaffLogin}
            className="text-sm sm:text-base transition-colors text-gray-400 hover:text-white"
          >
            Staff
          </button>
        </div>
      </nav>

      {/* Hero Content - Desktop/Tablet */}
      <div className="hidden sm:flex relative z-10 flex-col items-start justify-center px-8 lg:px-16 xl:px-24" style={{ height: 'calc(100vh - 100px)' }}>
        <div className="max-w-2xl lg:max-w-3xl">
          <h1 
            className="mb-6 text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight font-light"
            style={{ 
              color: '#FFFFFF',
              fontWeight: '300',
              lineHeight: '1.1'
            }}
          >
            Welcome to{' '}
            <span style={{ color: '#D4A736' }}>
              Reliance Surfaces
            </span>
          </h1>
          <p 
            className="mb-12 text-lg md:text-xl lg:text-2xl italic"
            style={{ 
              color: 'rgba(156, 163, 175, 0.9)',
              fontWeight: '300'
            }}
          >
            Surfaces that tell a story
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 max-w-md">
            <button
              onClick={onCustomerCheckIn}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-medium transition-all"
              style={{ 
                backgroundColor: '#D4A736', 
                color: '#000000',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E5B946';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#D4A736';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Check-In
            </button>
            <button
              onClick={onRevisit}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-medium transition-all"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid #D4A736',
                color: '#D4A736'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(212, 167, 54, 0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Revisiting
            </button>
          </div>
        </div>
      </div>

      {/* Hero Content - Mobile */}
      <div className="sm:hidden relative z-10 flex flex-col justify-between px-6" style={{ height: 'calc(100vh - 88px)' }}>
        {/* Main Content Area - Top section */}
        <div className="flex flex-col pt-8 text-center">
          <h1 
            className="mb-2 text-5xl leading-tight font-light"
            style={{ 
              color: '#FFFFFF',
              fontWeight: '200',
              lineHeight: '1.1'
            }}
          >
            Welcome
          </h1>
          <p 
            className="mb-6 text-2xl italic"
            style={{ 
              color: 'rgba(156, 163, 175, 0.8)',
              fontWeight: '300',
              fontStyle: 'italic'
            }}
          >
            to
          </p>
          <h2 
            className="mb-6 text-4xl leading-tight font-light"
            style={{ 
              color: '#D4A736',
              fontWeight: '300',
              lineHeight: '1.1'
            }}
          >
            Reliance Surfaces
          </h2>
          <p 
            className="mb-8 text-base italic px-4"
            style={{ 
              color: 'rgba(156, 163, 175, 0.9)',
              fontWeight: '300'
            }}
          >
            Surfaces that tell a story
          </p>

          <div className="flex flex-col gap-3 max-w-xs mx-auto w-full">
            <button
              onClick={onCustomerCheckIn}
              className="w-full px-8 py-3.5 rounded-lg text-base font-medium transition-all"
              style={{ 
                backgroundColor: '#D4A736', 
                color: '#000000',
                border: 'none'
              }}
            >
              Check-In
            </button>
            <button
              onClick={onRevisit}
              className="w-full px-8 py-3.5 rounded-lg text-base font-medium transition-all"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid #D4A736',
                color: '#D4A736'
              }}
            >
              Revisiting
            </button>
          </div>
        </div>

        {/* Mobile Eagle - Bottom section, no overlap */}
        <div className="flex justify-center items-center pb-16 pt-4">
          <img 
            src={eagleMobileImage} 
            alt="Eagle" 
            className="eagle-wings-mobile"
            style={{
              width: '85%',
              maxWidth: '360px',
              height: 'auto',
              opacity: 0.4,
              filter: 'brightness(0) saturate(100%) invert(63%) sepia(44%) saturate(443%) hue-rotate(1deg) brightness(93%) contrast(87%)',
            }}
          />
        </div>
      </div>

      {/* CSS Animation for Eagle Wings */}
      <style>{`
        @keyframes wingFlap {
          0%, 100% {
            transform: scaleX(1) scaleY(1);
          }
          25% {
            transform: scaleX(1.03) scaleY(0.98);
          }
          50% {
            transform: scaleX(1.05) scaleY(0.97);
          }
          75% {
            transform: scaleX(1.03) scaleY(0.98);
          }
        }

        @keyframes wingFlapMobile {
          0%, 100% {
            transform: scaleX(1) scaleY(1);
          }
          25% {
            transform: scaleX(1.04) scaleY(0.97);
          }
          50% {
            transform: scaleX(1.06) scaleY(0.96);
          }
          75% {
            transform: scaleX(1.04) scaleY(0.97);
          }
        }

        @keyframes subtleGlow {
          0%, 100% {
            opacity: 0.35;
          }
          50% {
            opacity: 0.42;
          }
        }

        @keyframes subtleGlowMobile {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.5;
          }
        }

        .eagle-wings {
          animation: wingFlap 3.5s ease-in-out infinite, subtleGlow 3s ease-in-out infinite;
          transform-origin: center;
        }

        .eagle-wings-mobile {
          animation: wingFlapMobile 4s ease-in-out infinite, subtleGlowMobile 3s ease-in-out infinite;
          transform-origin: center;
        }
      `}</style>
    </div>
  );
}