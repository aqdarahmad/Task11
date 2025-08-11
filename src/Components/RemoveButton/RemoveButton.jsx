
import './removebutton.css'; 

export default function RemoveButton({ onRemove }) {
  return (
    <button className="remove-btn" onClick={onRemove}>
      Remove
    </button>
  );
}
