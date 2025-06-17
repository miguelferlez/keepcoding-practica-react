interface WarningPopupProps {
  title: string;
  text: string;
  defaultIsOpen: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

function WarningPopup({
  title,
  text,
  defaultIsOpen,
  onClose,
  onConfirm,
}: WarningPopupProps) {
  if (!defaultIsOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/20">
      <div className="rounded-lg bg-white p-6">
        <h2 className="heading-3 text-center">{title}</h2>
        <p className="mb-4">{text}</p>
        <div className="flex justify-center space-x-2">
          <button onClick={onClose} className="btn btn-secondary">
            No, cancel
          </button>
          <button onClick={onConfirm} className="btn btn-remove">
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}

export default WarningPopup;
