import { ModalProps } from "./Modal.types";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Modal: React.FC<ModalProps> = (props) => {
  const { children, onClose } = props;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
      <div className="flex items-center justify-center w-full h-full">
        <div className="bg-white shadow-lg rounded-lg p-5 w-1/2">
          <div className="w-fit ml-auto mb-2">
            <button onClick={onClose}>
              <AiOutlineCloseCircle size={30} />
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
