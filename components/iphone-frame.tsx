import type { ReactNode } from 'react'

export function IPhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative rounded-[3.75rem] bg-[#1c1c1e] p-[11px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.35),0_30px_60px_-30px_rgba(0,0,0,0.4),inset_0_0_0_2px_#3a3a3c]">
      <span aria-hidden="true" className="absolute -left-[3px] top-[120px] h-8 w-[3px] rounded-l bg-[#2c2c2e]" />
      <span aria-hidden="true" className="absolute -left-[3px] top-[180px] h-14 w-[3px] rounded-l bg-[#2c2c2e]" />
      <span aria-hidden="true" className="absolute -left-[3px] top-[250px] h-14 w-[3px] rounded-l bg-[#2c2c2e]" />
      <span aria-hidden="true" className="absolute -right-[3px] top-[200px] h-20 w-[3px] rounded-r bg-[#2c2c2e]" />
      <div className="relative h-[844px] w-[390px] overflow-hidden rounded-[3.1rem] bg-white">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[11px] z-30 h-[37px] w-[125px] -translate-x-1/2 rounded-full bg-black"
        />
        {children}
      </div>
    </div>
  )
}
