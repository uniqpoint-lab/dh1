export function StatusBar() {
  return (
    <div className="flex h-[54px] items-center justify-between px-8 pt-1 text-black" aria-hidden="true">
      <span className="w-[54px] text-center text-[17px] font-semibold tracking-tight">7:42</span>
      <div className="flex items-center gap-[6px]">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor">
          <rect x="0" y="8" width="3" height="4" rx="1" />
          <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
          <rect x="10" y="3" width="3" height="9" rx="1" />
          <rect x="15" y="0" width="3" height="12" rx="1" />
        </svg>
        <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor">
          <path d="M8.5 2.6c2.3 0 4.4.9 6 2.4l1.2-1.2C13.8 1.9 11.3.9 8.5.9S3.2 1.9 1.3 3.8L2.5 5c1.6-1.5 3.7-2.4 6-2.4Z" />
          <path d="M8.5 5.9c1.4 0 2.6.5 3.6 1.4l1.2-1.2C12 4.9 10.3 4.2 8.5 4.2S5 4.9 3.7 6.1l1.2 1.2c1-.9 2.2-1.4 3.6-1.4Z" />
          <path d="M8.5 9.1c.5 0 1 .2 1.3.5L8.5 11 7.2 9.6c.3-.3.8-.5 1.3-.5Z" />
        </svg>
        <div className="flex items-center gap-[1px]">
          <div className="relative h-[13px] w-[25px] rounded-[4px] border border-black/40 p-[1.5px]">
            <div className="h-full w-[78%] rounded-[2px] bg-black" />
          </div>
          <div className="h-[4px] w-[1.5px] rounded-r bg-black/40" />
        </div>
      </div>
    </div>
  )
}
