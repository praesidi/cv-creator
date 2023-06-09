import "./WorkForm.css";

export default function Work({
  work,
  onChange,
  onDelete,
}: {
  work: any;
  onChange: any;
  onDelete: any;
}) {
  return (
    <div>
      <input
        type="text"
        id="position"
        name="position"
        placeholder="Position"
        maxLength={30}
        value={work.position}
        onChange={(e) => onChange(work.id, e)}
      />
      <input
        type="text"
        id="company"
        name="company"
        placeholder="Company"
        maxLength={20}
        value={work.company}
        onChange={(e) => onChange(work.id, e)}
      />
      <input
        type="text"
        id="city"
        name="city"
        placeholder="City"
        maxLength={20}
        value={work.city}
        onChange={(e) => onChange(work.id, e)}
      />
      <input
        type="text"
        id="from"
        name="from"
        placeholder="From"
        maxLength={12}
        value={work.from}
        onChange={(e) => onChange(work.id, e)}
      />
      <input
        type="text"
        id="to"
        name="to"
        placeholder="To"
        maxLength={12}
        value={work.to}
        onChange={(e) => onChange(work.id, e)}
      />
      <textarea
        name="description"
        id="workDescription"
        value={work.description}
        onChange={(e) => onChange(work.id, e)}
        cols={30}
        rows={3}
        maxLength={300}
        placeholder="Write here about your previous work"
      ></textarea>
      <button onClick={() => onDelete(work.id)}>Delete</button>
    </div>
  );
}
