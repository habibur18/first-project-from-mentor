const Modal = ({ open, children, closeModal }) => {
  return (
    <div
      className={`overflow-y-auto overflow-x-hidden flex justify-center items-center min-h-[100vh] fixed top-0 left-0 right-0 bottom-0 z-50 bg-[#262a32] bg-opacity-50 transition-opacity duration-300 ease-in-out ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        onClick={() => {
          closeModal();
        }}
        className={`max-w-[900px] transform transition-transform duration-[500ms] ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="max-w-[900px] transform transition-transform duration-[500ms]"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
