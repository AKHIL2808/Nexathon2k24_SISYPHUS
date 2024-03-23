
function Labels({labels}) {
    return (
        <div className="flex flex-col w-full justify-center space-y-2">
            <label className="font-medium text-white leading-none m-3" htmlFor={labels}>{labels}</label>
            <input  className="h-10 bg-zinc-800 text-white shadow-input
             rounded-md px-3 py-2 text-sm placeholder:text-neutral-600 focus-visible:outline-none 
             focus-visible:ring-neutral-400 focus-visible:ring-[2px] 
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]"
              type="text" placeholder='DAV' id={labels} />
       </div>
    )
}

export default Labels;
 