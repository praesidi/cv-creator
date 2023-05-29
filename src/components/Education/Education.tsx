import EducationForm from "../EducationForm/EducationForm";

export default function Education({
  educationList,
  onChange,
  onDelete,
  onAdd,
}: {
  educationList: any;
  onChange: any;
  onDelete: any;
  onAdd: any;
}) {
  return (
    <div>
      <h2>Education</h2>
      <div className="education-container">
        {educationList.map(
          (education: {
            id: string;
            university: string;
            city: string;
            degree: string;
            subject: string;
            from: string;
            to: string;
          }) => (
            <EducationForm
              key={education.id}
              education={education}
              onChange={onChange}
              onDelete={onDelete}
            ></EducationForm>
          )
        )}
      </div>
      <div className="education-add-btn">
        <button onClick={onAdd}>Add</button>
      </div>
    </div>
  );
}
