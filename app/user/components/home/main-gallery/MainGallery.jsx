import React from 'react'
import Gallery from './gallery/Gallery'
import '@/app/scss/components/main-gallery.scss'

const MainGallery = () => {
  return (
    <div className='main-gallery-container'>
        <Gallery />
        <Gallery />
    </div>
  )
}

export default MainGallery