function Alertas({children,err,size}) {
    const {
        state,
        msg
    }=err;

    const tamaños ={
        'xs':'xs',
        'md':'md '
    }

  return (
        <div>
            {
                state && (
                    <div className={`${tamaños[size] === 'xs' ? 'max-w-xs' :'max-w-md'} max-w-md mx-auto bg-red-100 border-red-600 rounded-md mt-3 border-2 px-4 mb-2`}>
                        <p className=" tracking-wider text-black text-center text-base font-semibold italic">{msg}</p>
                    </div>
                )
            }
            {children}
        </div>
    )
}

export default Alertas
