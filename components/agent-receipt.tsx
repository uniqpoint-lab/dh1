const items = [
  { qty: 2, name: 'Large Chicken Pho' },
  { qty: 1, name: 'Small Chicken Pho' },
  { qty: 1, name: 'Vegetarian Pho' },
  { qty: 2, name: 'Fresh Spring Rolls' },
]

const fees = [
  { label: 'Subtotal', value: '$60.00' },
  { label: 'Delivery Fee', value: '$0.00' },
  { label: 'Service Fee', value: '$4.50' },
  { label: 'Estimated Tax & Tip', value: '$9.50' },
]

function Divider() {
  return <div className="my-2 border-t border-dashed border-black/20" aria-hidden="true" />
}

export function AgentReceipt() {
  return (
    <div className="bubble bubble-received max-w-[88%] py-2.5 text-[15.5px] leading-snug">
      <p className="font-semibold">{'🍕 DoorDash AI Agent • Cart Assembled!'}</p>

      <Divider />

      <p className="font-medium">{'📍 Pho Hoa (Family Meal for 4)'}</p>
      <ul className="mt-1.5 flex flex-col gap-0.5">
        {items.map((item) => (
          <li key={item.name} className="flex gap-2">
            <span className="w-6 shrink-0 font-semibold tabular-nums text-black/70">{`${item.qty}x`}</span>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>

      <Divider />

      <p className="text-[14.5px]">{'⏱️ ETA: 20 minutes | 🏠 Deliver to: Home'}</p>

      <Divider />

      <dl className="flex flex-col gap-0.5 text-[15px]">
        {fees.map((fee) => (
          <div key={fee.label} className="flex justify-between gap-4">
            <dt className="text-black/70">{fee.label}</dt>
            <dd className="tabular-nums">{fee.value}</dd>
          </div>
        ))}
        <div className="mt-1.5 flex justify-between gap-4 border-t border-black/15 pt-1.5 text-[16.5px] font-bold">
          <dt>Total</dt>
          <dd className="tabular-nums">$74.00</dd>
        </div>
      </dl>

      <Divider />

      <p>
        {'Would you like me to place this order now? Reply '}
        <span className="font-semibold">{"'YES'"}</span>
        {' to confirm charge to your saved Visa (*3964).'}
      </p>
    </div>
  )
}
