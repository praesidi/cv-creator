import { Key } from "react";
import Certificate from "../Certificate/Certificate";
import "./Certificates.css";

export default function Certifications({
  certificate,
  certificates,
  onChange,
  onDelete,
  onClick,
}: {
  certificate: any;
  certificates: any;
  onChange: any;
  onDelete: any;
  onClick: any;
}) {
  return (
    <div className="certificates-container block">
      <h2>Certifications</h2>
      <form onSubmit={onClick}>
        <input
          type="text"
          id="value"
          name="value"
          minLength={3}
          maxLength={30}
          value={certificate.value}
          onChange={onChange}
          placeholder="Title"
          required
        />
        <input
          type="number"
          id="year"
          name="year"
          min={1970}
          max={2023}
          value={certificate.year}
          onChange={onChange}
          placeholder="Year of Issue"
        />
        <div>
          {certificates.map(
            (certificate: { id: string; value: string; year: number }) => (
              <Certificate
                key={certificate.id}
                certificate={certificate}
                onDelete={onDelete}
              ></Certificate>
            )
          )}
        </div>
        <button type="submit">Add</button>
        {/* <button onClick={onClick}>Add</button> */}
      </form>
    </div>
  );
}
