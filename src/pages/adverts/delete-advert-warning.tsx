interface DeleteAdvertProps {
  defaultIsOpen: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

function DeleteAdvertWarning({
  defaultIsOpen,
  onClose,
  onConfirm,
}: DeleteAdvertProps) {
  if (!defaultIsOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20">
      <div className="rounded-lg bg-white p-6">
        <h2 className="heading-3 text-center">Are you sure?</h2>
        <p className="mb-4">This advert will be removed permanently.</p>
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="btn btn-secondary">
            No, cancel
          </button>
          <button onClick={onConfirm} className="btn btn-remove">
            Yes, I'm sure
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteAdvertWarning;
