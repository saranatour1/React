import React from 'react'

function ChatBody({handleCloseChat ,messages ,lastMessageRef ,typingStatus}) {

  const handleLeaveChat = () => {
    localStorage.removeItem('userName');
    // window.location.reload();
    handleCloseChat();
  };

  return (
    <>
        <header className="flex justify-end w-11/12 mt-5">
      <button
        onClick={handleLeaveChat}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          LEAVE CHAT
        </span>
      </button>
    </header>
    <div className="flex flex-col   h-3/5 overflow-y-auto">
    <div className="flex flex-col gap-2 mt-4 mx-auto">
      {messages.map((message) =>
        message.name === localStorage.getItem('userName') ? (
          <div className="flex justify-end" key={message.id} >
          <div className="flex flex-col items-end max-w-xs">
            <p className="text-sm">You</p>
            <div className="bg-blue-500 text-white py-2 px-4 rounded-lg">
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        </div>
        ) : (
          <div className="flex justify-start">
          <div className="flex flex-col items-start max-w-xs">
            <p className="text-sm">{message.name}</p>
            <div className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg">
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        </div>
        )
      )}

    </div>

    <div className="message__status">
      <p className='text-gray-500 dark:text-gray-400'>{typingStatus} ...</p>
    </div>
    <div ref={lastMessageRef} />
  </div>
  </>
  )
}

export default ChatBody;