import { Mic, Plus } from 'lucide-react'

export function MessageInputBar() {
  return (
    <div className="bg-white px-3 pb-2 pt-1.5">
      <div className="flex items-center gap-2.5">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#e9e9eb]">
          <Plus className="size-5 text-[#7c7c80]" strokeWidth={2.5} aria-label="Apps" />
        </div>
        <div className="flex h-9 flex-1 items-center justify-between rounded-full border border-black/15 pl-3.5 pr-2">
          <span className="text-[17px] text-[#c4c4c6]">iMessage</span>
          <Mic className="size-5 text-[#9a9a9e]" strokeWidth={2} aria-label="Dictate" />
        </div>
      </div>
      <div className="mx-auto mt-4 h-[5px] w-[134px] rounded-full bg-black" aria-hidden="true" />
    </div>
  )
}
