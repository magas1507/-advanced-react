import { useState } from "react"

interface ModalProps {
  trigger: React.ReactNode
  render: (handleOpenModal: () => void, handleCloseModal: () => void) => JSX.Element
}

export const Modal = ({ trigger, render }: ModalProps) => {
  const [viewModal, setViewModal] = useState<boolean>(false)
  const handleOpenModal = () => setViewModal(true)
  const handleCloseModal = () => setViewModal(false)

  return (
    <div className="modal-container">
      <div className="trigger-container" onClick={handleOpenModal}>
        {trigger}
      </div>
      {viewModal && render(handleOpenModal, handleCloseModal)}
    </div>
  )
}

export const ParentComponent = () => {
  return (
    <div className="">
      <Modal
        trigger={<button>Abrir Modal</button>}
        render={(handleOpenModal, handleCloseModal) => (
          <div style={{ marginTop: '20px' }}>
            <p>Modal</p>
            <button onClick={handleCloseModal}>X</button>
          </div>
        )}
      />
    </div>
  )
}