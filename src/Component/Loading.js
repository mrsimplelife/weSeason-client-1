import "./Loading.css";
export default function Loading() {
  return (
    <div className="loading">
      <div className="loading__mask-left">
        <div className="loading__fill-left" />
      </div>
      <div className="loading__mask-right">
        <div className="loading__fill-right" />
      </div>
    </div>
  );
}
