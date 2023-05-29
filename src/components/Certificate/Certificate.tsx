import "./Certificate.css";

export default function Certificate({
  certificate,
  onDelete,
}: {
  certificate: any;
  onDelete: any;
}) {
  return (
    <div className="certificate-item">
      {certificate.year ? (
        <p>
          {certificate.value}
          {", "}
          <span>{certificate.year}</span>
        </p>
      ) : (
        <p>{certificate.value}</p>
      )}
      <button onClick={() => onDelete(certificate.id)}>
        Delete
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
}
