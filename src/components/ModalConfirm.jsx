function ModalConfirm({ show, onClose, onConfirm }) {
  if (!show) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content p-4 shadow rounded bg-white">
        <h4>Are you sure?</h4>
        <p>If you delete this thing the entire universe will go down!</p>
        <div className="d-flex justify-content-end gap-2 mt-3">
          <button className="btn btn-secondary" onClick={onClose}>Oh no!</button>
          <button className="btn btn-danger" onClick={onConfirm}>Yes baby!</button>
        </div>
      </div>
    </div>
  );
}

export default ModalConfirm;
