import "./WorkExperience.css";

export default function WorkExperience({
  onChange,
  work,
}: {
  onChange: any;
  work: any;
}) {
  return (
    <div className="work-container block">
      <h2>Work History</h2>
      <input
        type="text"
        id="position"
        name="position"
        placeholder="Position"
        maxLength={30}
        value={work.title}
        onChange={onChange}
      />

      <input
        type="text"
        id="company"
        name="company"
        placeholder="Company"
        maxLength={20}
        value={work.phone}
        onChange={onChange}
      />

      <input
        type="text"
        id="city"
        name="city"
        placeholder="City"
        maxLength={20}
        value={work.phone}
        onChange={onChange}
      />

      <input
        type="text"
        id="from"
        name="from"
        placeholder="From"
        maxLength={20}
        value={work.phone}
        onChange={onChange}
      />

      <input
        type="text"
        id="to"
        name="to"
        placeholder="To"
        maxLength={20}
        value={work.phone}
        onChange={onChange}
      />

      <button>Add</button>
      <button>Delete</button>
    </div>
  );
}
