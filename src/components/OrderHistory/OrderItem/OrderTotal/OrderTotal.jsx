export default function OrderTotal({ orderHistory }) {
  const totalSum = orderHistory.reduce((previousValue, currentValue) =>
    previousValue + currentValue.total, 0
  );

  return (
    <>
      <p>Totalt spenderat</p>
      <p>
        {totalSum}
        <span> kr</span>
      </p>
    </>
  );
}
