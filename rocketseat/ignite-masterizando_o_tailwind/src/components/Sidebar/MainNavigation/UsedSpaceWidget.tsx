export function UsedSpaceWidget(){
  return(
    <div className="flex flex-col gap-4 rounded-lg bg-cyan-50 px-4 py-5">
        <div className="space-x-1">
          <span className="text-sm/5 font-medium text-cyan-800">
            Espaço usado
          </span>
          <p className="text-sm/5 text-cyan-700">Seu time tem 80% de espaço. Precisa de mais?</p>
        </div>

        <div className="h-2 rounded-full bg-cyan-200">
          <div className="h-2 w-4/5 rounded-full bg-cyan-600"></div>
        </div>

        <div className="space-x-3">
          <button
            type="button"
            className="text-sm font-medium text-cyan-500 hover:text-cyan-700"
            >
            Ignorar
          </button>
          <button
            type="button"
            className="text-sm font-medium text-cyan-500 hover:text-cyan-700"
            >
            Atualizar Plano
          </button>
        </div>
      </div>
  )
}