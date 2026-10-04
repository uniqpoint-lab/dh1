import { ChevronLeft, ChevronRight, Video } from 'lucide-react'

export function MessagesHeader() {
  return (
    <header className="relative z-20 border-b border-black/10 bg-[#f9f9f9]/90 pb-2 backdrop-blur-xl">
      <div className="flex items-start justify-between px-2">
        <div className="flex items-center pt-3 text-imessage-blue">
          <ChevronLeft className="size-8" strokeWidth={2.4} aria-hidden="true" />
          <span className="-ml-1 flex h-[22px] min-w-[22px] items-center justify-center rounded-full bg-imessage-blue px-1.5 text-[13px] font-semibold text-white">
            3
          </span>
          <span className="sr-only">Back to conversations, 3 unread</span>
        </div>

        <div className="flex flex-col items-center gap-1 pt-1">
          <div className="flex size-[52px] items-center justify-center rounded-full bg-doordash shadow-sm">
            <svg viewBox="0 0 24 24" className="size-7 text-white" fill="currentColor" aria-hidden="true">
              <path d="M23.07 8.1A5.94 5.94 0 0 0 17.84 5H1.06a.5.5 0 0 0-.35.86l3.66 3.67a1.6 1.6 0 0 0 1.13.47h12.31a1.6 1.6 0 1 1 .03 3.2H9.43a.5.5 0 0 0-.36.86l3.67 3.67a1.6 1.6 0 0 0 1.13.47h3.85c4.43 0 7.42-4.73 5.35-9.1Z" />
            </svg>
          </div>
          <div className="flex items-center text-[12px] text-black">
            <span className="font-normal">DoorDash AI</span>
            <ChevronRight className="size-3 text-imessage-label" strokeWidth={2.5} aria-hidden="true" />
          </div>
        </div>

        <div className="flex w-[52px] justify-end pr-3 pt-4 text-imessage-blue">
          <Video className="size-6" strokeWidth={1.8} aria-label="FaceTime" />
        </div>
      </div>
    </header>
  )
}
