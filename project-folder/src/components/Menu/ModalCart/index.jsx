import React from 'react'

function ModalCart({ setShowModal }) {
  return (
    <div 
      onClick={() => setShowModal(false)}
      className="
      fixed w-full min-h-screen
      bg-fade-modal"
    >
      <div
      onClick={(e) => e.stopPropagation()}
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        w-500 h-500
        bg-box-background-darker
        '
      >

      </div>
    </div>
  )
}

export default ModalCart