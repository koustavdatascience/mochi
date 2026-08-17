export type ListRowData = {
  text: string;
};
/** A list row. */
export default function ListRow({ d, cids }: { d: ListRowData; cids: string[] }) {
  return (
    <li data-cid={cids[0]} className="list-item mb-1.5">
      {d.text}
    </li>
  );
}
