import React from 'react'

function ModalCart({ setShowModal }) {
  return (
    <div 
    onClick={() => setShowModal(false)}
    className="
    fixed w-full min-h-screen
    bg-fade-modal"
    >

    </div>
  )
}

export default ModalCart