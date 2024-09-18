'use client'
import { useChatBot } from '@/hooks/chatbot/use-chatbot'
import React from 'react'
import { BotWindow } from './window'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { BotIcon } from '@/icons/bot-icon'

type Props = {}

const AiChatBot = (props: Props) => {
  const {
    onOpenChatBot,
    botOpened,
    onChats,
    register,
    onStartChatting,
    onAiTyping,
    messageWindowRef,
    currentBot,
    loading,
    onRealTime,
    setOnChats,
    errors,
  } = useChatBot()
  const iconUrl = currentBot?.chatBot?.icon
  ? `https://ucarecdn.com/${currentBot.chatBot.icon}/`
  : 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PGRlZnM+PHN0eWxlPi5ie2ZpbGw6I2Y5MDt9LmN7ZmlsbDojMjMyZjNlO308L3N0eWxlPjwvZGVmcz48Y2lyY2xlIGNsYXNzPSJiIiBjeD0iMzAiIGN5PSIzMCIgcj0iMzAiLz48Zz48Zz48cGF0aCBjbGFzcz0iYyIgZD0iTTI1LjkyLDEwLjE3Yy05LjA0LDAtMTYuMzksNy4zNS0xNi4zOSwxNi4zOSwwLDMuOTgsMS40NCw3LjgsNC4wNSwxMC43OS0uNCwxLjU1LS45NywyLjQzLTEuNTgsMi40My0uMzgsMC0uNzEsLjI2LS43OSwuNjMtLjA5LC4zNywuMDksLjc1LC40MywuOTEsLjE1LC4wOCwzLjYxLDEuNzQsNi43LS4yMywyLjMzLDEuMjIsNC45NCwxLjg2LDcuNTcsMS44Niw5LjA0LDAsMTYuMzktNy4zNSwxNi4zOS0xNi4zOXMtNy4zNS0xNi4zOS0xNi4zOS0xNi4zOVptMCwzMS4xNGMtMi41MywwLTUuMDMtLjY1LTcuMjMtMS44OS0uMTItLjA3LS4yNi0uMS0uNC0uMS0uMTgsMC0uMzUsLjA2LS40OSwuMTctMS4yNywuOTgtMi43MSwxLjAzLTMuNzgsLjg2LC41NC0uNjksLjk2LTEuNywxLjI2LTMuMDUsLjA2LS4yNi0uMDEtLjUzLS4yLS43My0yLjUzLTIuNzMtMy45Mi02LjI5LTMuOTItMTAuMDEsMC04LjE0LDYuNjItMTQuNzYsMTQuNzYtMTQuNzZzMTQuNzYsNi42MiwxNC43NiwxNC43Ni02LjYyLDE0Ljc2LTE0Ljc2LDE0Ljc2WiIvPjxjaXJjbGUgY2xhc3M9ImMiIGN4PSIxOS42MSIgY3k9IjI2LjU2IiByPSIxLjU1Ii8+PGNpcmNsZSBjbGFzcz0iYyIgY3g9IjI2LjE4IiBjeT0iMjYuNTYiIHI9IjEuNTUiLz48Y2lyY2xlIGNsYXNzPSJjIiBjeD0iMzIuNzUiIGN5PSIyNi41NiIgcj0iMS41NSIvPjwvZz48cGF0aCBjbGFzcz0iYyIgZD0iTTQ4LjMzLDQ2Ljk3Yy0uMzksMC0uNzktLjY1LTEuMDgtMS43MywyLjA4LTIuNCwzLjIyLTUuNDYsMy4yMi04LjY1LDAtNC42Ny0yLjQzLTguNzctNi4wOS0xMS4xMywuMDIsLjM2LC4wNCwuNzMsLjA0LDEuMDksMCwuMzEsMCwuNjEtLjAyLC45MiwyLjcsMi4xMyw0LjQ1LDUuNDIsNC40NSw5LjEyLDAsMi45My0xLjA5LDUuNzItMy4wOCw3Ljg3LS4xOCwuMi0uMjUsLjQ3LS4yLC43MywuMjEsLjk2LC41MSwxLjcxLC44NywyLjI3LS43OSwuMDgtMS43NS0uMDItMi42Mi0uNjktLjI2LS4yLS42MS0uMjItLjg5LS4wNi0xLjczLC45Ny0zLjY5LDEuNDktNS42OSwxLjQ5LTMuMywwLTYuMjctMS4zOS04LjM5LTMuNi0uNjYsLjEtMS4zMywuMTYtMiwuMTgsMi40MywzLjA3LDYuMTgsNS4wNSwxMC4zOSw1LjA1LDIuMSwwLDQuMTctLjUsNi4wMy0xLjQ2LDIuNTIsMS41NCw1LjMsLjIsNS40MywuMTQsLjM0LS4xNywuNTItLjU1LC40My0uOTEtLjA5LS4zNy0uNDEtLjYzLS43OS0uNjNaIi8+PC9nPjwvc3ZnPg==';
  return (
    <div className="h-[80%] flex flex-col rounded-md justify-end items-end gap-4">
      {botOpened && (
        //@ts-ignore
        <BotWindow
          errors={errors}
          setChat={setOnChats}
          realtimeMode={onRealTime}
          helpdesk={currentBot?.helpdesk!}
          domainName={currentBot?.name!}
          ref={messageWindowRef}
          help={currentBot?.chatBot?.helpdesk}
          theme={currentBot?.chatBot?.background}
          textColor={currentBot?.chatBot?.textColor}
          chats={onChats}
          register={register}
          onChat={onStartChatting}
          onResponding={onAiTyping}
        />
      )}
      <div
        className={cn(
          'rounded-full relative cursor-pointer shadow-md w-20 h-20 flex items-center justify-center bg-grandis',
          loading ? 'invisible' : 'visible'
        )}
        onClick={onOpenChatBot}
      >
        {currentBot?.chatBot?.icon ? (
          <Image
            src={iconUrl}
            alt="bot"
            fill
            className="rounded-md"
          />
        ) : (
          <BotIcon />
        )}
      </div>
    </div>
  )
}

export default AiChatBot
