import "./Education.css";

export default function Education() {
  return (
    <div className="education-container block">
      <h2>Education</h2>
      <input
        type="text"
        id="university"
        name="university"
        placeholder="University Name"
        maxLength={30}
        // value={work.title}
        // onChange={onChange}
      />

      <input
        type="text"
        id="city"
        name="city"
        placeholder="City"
        maxLength={20}
        // value={work.phone}
        // onChange={onChange}
      />

      <input
        type="text"
        id="degree"
        name="degree"
        placeholder="Degree"
        maxLength={20}
        // value={work.phone}
        // onChange={onChange}
      />

      <input
        type="text"
        id="subject"
        name="subject"
        placeholder="Subject"
        maxLength={20}
        // value={work.phone}
        // onChange={onChange}
      />

      <input
        type="text"
        id="from"
        name="from"
        placeholder="From"
        maxLength={20}
        // value={work.phone}
        // onChange={onChange}
      />

      <input
        type="text"
        id="to"
        name="to"
        placeholder="To"
        maxLength={20}
        // value={work.phone}
        // onChange={onChange}
      />

      <button>Add</button>
      <button>Delete</button>
    </div>
  );
}
