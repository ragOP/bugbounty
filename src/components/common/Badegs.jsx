const badgeItems = [
  { id: 1, name: "Tech Updates" },
  { id: 2, name: "React Js" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "Python" },
  { id: 5, name: "Java" },
  { id: 6, name: "C#" },
  { id: 7, name: "C++" },
  { id: 8, name: "Ruby" },
  { id: 9, name: "PHP" },
  { id: 10, name: "Swift" },
];

function Badegs() {
  return (
    <div className="my-3 d-flex align-items-center justify-content-center flex-wrap">
      {badgeItems.map((badgeItem) => (
        <span
          key={badgeItem.id}
          className="badge bg-primary mx-1 my-2"
          style={{ cursor: "pointer" }}
        >
          {badgeItem.name}
        </span>
      ))}
    </div>
  );
}

export default Badegs;
