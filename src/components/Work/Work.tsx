import WorkForm from "../WorkForm/WorkForm";

export default function Education({
  workList,
  onChange,
  onDelete,
  onAdd,
}: {
  workList: any;
  onChange: any;
  onDelete: any;
  onAdd: any;
}) {
  return (
    <div>
      <h2>Work</h2>
      <div className="work-container">
        {workList.map(
          (work: {
            id: string;
            position: string;
            description: string;
            company: string;
            city: string;
            from: string;
          }) => (
            <WorkForm
              key={work.id}
              work={work}
              onChange={onChange}
              onDelete={onDelete}
            ></WorkForm>
          )
        )}
      </div>
      <div className="work-add-btn">
        <button onClick={onAdd}>Add</button>
      </div>
    </div>
  );
}
