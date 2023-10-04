import { LogOut } from "lucide-react";

export function Profile(){
  return(
   <>
    <div className="flex items-center gap-3 pb-10">
      <img src="https://github.com/tricia-sz.png" className="h-10 w-10 rounded-full" />
    </div>

    <div className="flex flex-col truncate pb-10">
      <span className="tex-sm font-semibold text-zinc-700">Trícia Souza</span>
      <span className="text-sm text-zinc-500 truncate">patricia.sz.br@gmail.com</span>
    </div>
   </>
  )
}