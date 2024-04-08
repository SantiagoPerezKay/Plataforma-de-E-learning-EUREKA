function Alertas({children,err}) {
    const {
        state,
        msg
    }=err;

  return (
        <div className="max-w-xs">
            {
                state && (
                    <div className="w-full bg-red-100 border-red-600 rounded-md mt-3 border-2 px-4 mb-2">
                        <p className=" tracking-wider text-black text-center text-base font-semibold italic">{msg}</p>
                    </div>
                )
            }
            {children}
        </div>
    )
}

export default Alertas
