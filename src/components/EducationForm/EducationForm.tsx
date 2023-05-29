import "./EducationForm.css";

export default function EducationForm({
  // educationId,
  education,
  onChange,
  onDelete,
}: {
  // educationId: number;
  education: any;
  onChange: any;
  onDelete: any;
}) {
  return (
    <div>
      <input
        type="text"
        id="university"
        name="university"
        placeholder="University Name"
        maxLength={30}
        value={education.university}
        onChange={(e) => onChange(education.id, e)}
      />
      <input
        type="text"
        id="city"
        name="city"
        placeholder="City"
        maxLength={20}
        value={education.city}
        onChange={(e) => onChange(education.id, e)}
      />
      <input
        type="text"
        id="degree"
        name="degree"
        placeholder="Degree"
        maxLength={20}
        value={education.degree}
        onChange={(e) => onChange(education.id, e)}
      />
      <input
        type="text"
        id="subject"
        name="subject"
        placeholder="Subject"
        maxLength={20}
        value={education.subject}
        onChange={(e) => onChange(education.id, e)}
      />
      <input
        type="text"
        id="from"
        name="from"
        placeholder="From"
        maxLength={20}
        value={education.from}
        onChange={(e) => onChange(education.id, e)}
      />
      <input
        type="text"
        id="to"
        name="to"
        placeholder="To"
        maxLength={20}
        value={education.to}
        onChange={(e) => onChange(education.id, e)}
      />
      <button onClick={() => onDelete(education.id)}>Delete</button>
    </div>
  );
}
