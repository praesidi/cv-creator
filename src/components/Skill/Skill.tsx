import "./Skill.css";

export default function Skill({
  children,
  skillId,
  onDelete,
}: {
  children: any;
  skillId: string;
  onDelete: any;
}) {
  return (
    <div className="task-item">
      <p>{children}</p>
      <button onClick={() => onDelete(skillId)}>
        Delete
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
}
