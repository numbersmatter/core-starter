
interface IListOfItems {
  itemName: string,
  title: string,
};

export default function ListOfItems(props: IListOfItems) {
  const list = ["One", "Two", "Three", "Four" ]


  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:px-6">
        {/* Content goes here */}
        {props.title}
        {/* We use less vertical padding on card headers on desktop than on body sections */}
      </div>
      <div className="px-4 py-5 sm:p-6">
        {/* Content goes here */}
        <ul>
          { 
            list.map((item)=> 
              <li key={item}>
                {`${props.itemName} ${item}`}
              </li>
            )
          }
        </ul>
      </div>
    </div>
  );
}