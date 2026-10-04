import { Conversation } from '@/components/conversation'
import { IPhoneFrame } from '@/components/iphone-frame'
import { MessageInputBar } from '@/components/message-input-bar'
import { MessagesHeader } from '@/components/messages-header'
import { StatusBar } from '@/components/status-bar'

export default function Page() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-8 bg-[radial-gradient(ellipse_at_top,#ffffff_0%,#eef0f4_55%,#e2e5eb_100%)] px-4 py-12">
      <h1 className="sr-only">DoorDash AI Agent iMessage ordering concept</h1>
      <div className="origin-top scale-[0.85] sm:scale-100">
        <IPhoneFrame>
          <div className="flex h-full flex-col">
            <div className="bg-[#f9f9f9]/90">
              <StatusBar />
            </div>
            <MessagesHeader />
            <Conversation />
            <MessageInputBar />
          </div>
        </IPhoneFrame>
      </div>
      <p className="text-center text-sm text-[#6e6e73]">
        <span className="font-semibold text-[#1d1d1f]">DoorDash AI Agent</span>
        {' — conversational ordering over iMessage. UI/UX concept.'}
      </p>
    </main>
  )
}
