import { Logo } from "@/components/Sidebar/MainNavigation/Logo"
import { BarChart, CheckSquare, Cog, Flag, Home, LifeBuoy, Search, SquareStack, Users } from "lucide-react"
import { NavItem } from "./MainNavigation/NavItem"
import { UsedSpaceWidget } from "./MainNavigation/UsedSpaceWidget"
import { Profile } from "./MainNavigation/Profile"
import * as Input from '@/components/Input'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
      <Input.Root>
        <Input.Icon>
          <Search className="h-5 w-5 to-zinc-500" />
        </Input.Icon>
        <Input.Control placeholder="Search" />
      </Input.Root>
      <nav className="-space-y-0.5">
        <NavItem title="Início" icon={Home}/>
        <NavItem title="Painel" icon={BarChart}/>
        <NavItem title="Projetos" icon={SquareStack}/>
        <NavItem title="Tarefas" icon={CheckSquare}/>
        <NavItem title="Comunicado" icon={Flag}/>
        <NavItem title="Usuários" icon={Users}/>
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Suporte" icon={LifeBuoy}/>
          <NavItem title="Configurações" icon={Cog}/>
        </nav>
      </div>

      <UsedSpaceWidget />

      <div className="h-px bg-zinc-200 mb-7">
       <div className="flex  gap-2 mt-4 justify-center">
        <Profile />
       </div>
      </div>
    </aside>
  )
}
