'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import '@/app/scss/components/header.scss'

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header fixed-top ${scrolling ? 'scroll-active' : ''}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <a className="navbar-brand" href="#">
              <Image src="/logo.svg" alt="logo" width={100} height={100} />
            </a>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Pre-order</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Dc Comics</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Marvel</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">MiniCo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Coming Soon</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;