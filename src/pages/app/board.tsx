export const Board = () => {
    return(
        <div id="container" className="min-w-full h-full flex flex-col px-4 md:px-7 pb-5 md:pt-5 min-h-0">    
            <div id="title" className="flex items-center justify-between p-5 w-full">
                <h1 className="text-3xl font-medium">Board</h1>
            </div>
            <div id="content" className="bg-[#0F0B15] w-full flex flex-col flex-1 rounded-3xl py-5 px-2 min-h-0">              
            </div>
        </div>
    )
}