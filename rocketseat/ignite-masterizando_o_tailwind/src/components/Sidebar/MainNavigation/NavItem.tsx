import { ChevronDown } from "lucide-react"
import { ElementType } from "react"

export interface NavItemProps {
  title: string,
  icon: ElementType

}
export function NavItem({title, icon: Icon}: NavItemProps){
  return(
    <a href="" className=" group flex items-center gap-3 roudend px-3 py-2 hover:bg-cyan-300/50 rounded">
    <Icon className="h-5 w-5 text-zinc-500 group-hover:text-cyan-700"/>
    <span className="font-medium text-zinc-700 group-hover:text-cyan-700">
      {title}
    </span>
    <ChevronDown className="ml-auto h-5 text-zinc-400 group-hover:text-cyan-500"/>
  </a>
  )
}