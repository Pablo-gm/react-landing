import "./caselist.scss";

function CaseList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "caseList button button--primary" : "caseList button button--outline"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}


export default CaseList