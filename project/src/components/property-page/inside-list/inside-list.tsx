type InsideListProps = {
  data: string[],
}

function InsideList({data}: InsideListProps): JSX.Element {
  return (
    <ul className="property__inside-list">
      {data.map((it) => <li key={`inside-list-${it}`} className="property__inside-item">{it}</li>)}
    </ul>
  );
}

export default InsideList;
