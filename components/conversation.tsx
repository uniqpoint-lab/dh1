import { AgentReceipt } from './agent-receipt'

export function Conversation() {
  return (
    <section
      aria-label="Conversation with DoorDash AI"
      className="flex flex-1 flex-col justify-end overflow-hidden px-4 pb-3"
    >
      <p className="mb-3 text-center text-[11px] text-imessage-label">
        <span className="font-semibold">iMessage</span>
        <br />
        Today 7:41 PM
      </p>

      <div className="flex flex-col items-end">
        <p className="bubble bubble-sent mr-1.5 max-w-[75%]">order my regular friday night dinner for us</p>
        <span className="mr-1.5 mt-1 text-[11px] font-medium text-imessage-label">Read 7:41 PM</span>
      </div>

      <div className="mt-2 flex flex-col items-start pl-1.5">
        <AgentReceipt />
      </div>
    </section>
  )
}
