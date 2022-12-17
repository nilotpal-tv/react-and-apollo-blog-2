const ITEMS = new Array(7).fill(0);
const BG_COLORS = [
  '#a42ce9',
  '#2d7fea',
  '#f4f73e',
  '#eb30c1',
  '#ffd500',
  '#2eebd1',
  '#282c35',
];

const Border = () => {
  return (
    <ul style={{ listStyle: 'none', display: 'flex' }}>
      {ITEMS.map((_, i) => (
        <li
          style={{ background: BG_COLORS[i], height: '8px', width: '100%' }}
        />
      ))}
    </ul>
  );
};

export default Border;
