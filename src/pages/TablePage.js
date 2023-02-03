import SortableTable from '../components/SortableTable';

function TablePage() {
  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-500', score: 3 },
    { name: 'Banana', color: 'bg-yellow-500', score: 1 },
    { name: 'Lime', color: 'bg-green-500', score: 4 },
  ];

  const config = [
    {
      label: 'Fruit',
      render: (item) => item.name,
      sortValue: (item) => item.name,
    },
    {
      label: 'Color',
      render: (item) => {
        return <div className={`p-3 m-2 ${item.color}`}></div>;
      },
    },
    {
      label: 'Score',
      render: (item) => item.score,
      sortValue: (item) => item.score,
    },
  ];

  const keyFn = (item) => item.name;

  return <SortableTable data={data} config={config} keyFn={keyFn} />;
}

export default TablePage;
