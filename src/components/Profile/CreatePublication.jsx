import FormNewPublication from "./FormNewPublication";
import useModal from "../../hooks/useModal";
import Modal from "../Modal";

export default function CreatePublication({ id }) {
  const { isOpen, closeModal, openModal } = useModal();
  return (
    <>
      <button
        onClick={openModal}
        className="button-create-publication btn-orange"
      >
        {isOpen ? "cancel" : "Create new publication"}
      </button>
      {isOpen && (
        <Modal closeModal={closeModal}>
          <button onClick={closeModal} className="close-modal-button">
            X
          </button>
          <FormNewPublication UserId={id} closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
}
