import Skill from "../Skill/Skill";
import "./Skills.css";

export default function Skills({
  skill,
  skills,
  onChange,
  onDelete,
  onClick,
}: {
  skill: any;
  skills: any;
  onChange: any;
  onDelete: any;
  onClick: any;
}) {
  return (
    <div className="skills-container block">
      <h2>Skills</h2>
      <input
        type="text"
        id="skill"
        name="skill"
        maxLength={30}
        value={skill}
        onChange={onChange}
        placeholder="Special Skill"
      />
      <div>
        {skills.map((skill: { id: string; value: string }) => (
          <Skill key={skill.id} skillId={skill.id} onDelete={onDelete}>
            {" "}
            {skill.value}{" "}
          </Skill>
        ))}
      </div>
      <button onClick={onClick}>Add</button>
    </div>
  );
}
