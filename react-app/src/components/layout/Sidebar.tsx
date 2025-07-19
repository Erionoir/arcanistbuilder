import { Users, BarChart3, Book, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SidebarProps {
  currentView: string
  onViewChange: (view: 'team-builder' | 'tier-list' | 'library' | 'roadmap') => void
}

export function Sidebar({ currentView, onViewChange }: SidebarProps) {
  const navItems = [
    {
      id: 'team-builder',
      label: 'Team Builder',
      icon: Users,
    },
    {
      id: 'tier-list',
      label: 'Tier List',
      icon: BarChart3,
    },
    {
      id: 'library',
      label: 'Library',
      icon: Book,
    },
    {
      id: 'roadmap',
      label: 'Roadmap',
      icon: Clock,
    },
  ] as const

  return (
    <nav className="fixed top-0 left-0 h-full w-64 bg-bg-secondary border-r border-border-primary transform -translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out z-50">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <img src="/assets/logo.png" alt="Logo" className="w-8 h-8" />
          <h1 className="text-xl font-bold text-accent-gold">ArcanistBuilder</h1>
        </div>
        
        <div className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = currentView === item.id
            
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={cn(
                  "w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
                  isActive
                    ? "bg-accent-gold text-bg-primary"
                    : "text-text-secondary hover:bg-bg-elevated hover:text-accent-amber"
                )}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            )
          })}
        </div>
      </div>
      
      <div className="absolute bottom-6 left-6 text-text-muted text-sm">
        Beta v1.7
      </div>
    </nav>
  )
}