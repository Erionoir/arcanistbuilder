import { useState } from 'react'
import { Sidebar } from '@/components/layout/Sidebar'
import { Header } from '@/components/layout/Header'
import { TeamBuilder } from '@/components/team-builder/TeamBuilder'
import { TierList } from '@/components/tier-list/TierList'
import { Library } from '@/components/library/Library'
import { Roadmap } from '@/components/Roadmap'
import type { AppState } from '@/types'

function App() {
  const [appState, setAppState] = useState<AppState>({
    selectedCharacters: [],
    blacklistedCharacters: [],
    currentView: 'team-builder',
    searchTerm: '',
    activeFilters: {
      afflatus: [],
      damageType: [],
      rank: [],
      role: []
    },
    numTeamsToGenerate: 1
  })

  const updateAppState = (updates: Partial<AppState>) => {
    setAppState(prev => ({ ...prev, ...updates }))
  }

  const renderCurrentView = () => {
    switch (appState.currentView) {
      case 'tier-list':
        return <TierList />
      case 'library':
        return <Library />
      case 'roadmap':
        return <Roadmap />
      default:
        return <TeamBuilder appState={appState} updateAppState={updateAppState} />
    }
  }

  return (
    <div className="min-h-screen bg-bg-primary font-inter">
      <Sidebar 
        currentView={appState.currentView} 
        onViewChange={(view) => updateAppState({ currentView: view })} 
      />
      <div className="ml-0 lg:ml-64">
        <Header />
        <main className="p-4">
          {renderCurrentView()}
        </main>
      </div>
    </div>
  )
}

export default App
