import { CharacterGrid } from './CharacterGrid'
import { SearchAndFilters } from './SearchAndFilters'
import { SelectedCharacters } from './SelectedCharacters'
import { TeamResults } from './TeamResults'
import type { AppState } from '@/types'

interface TeamBuilderProps {
  appState: AppState
  updateAppState: (updates: Partial<AppState>) => void
}

export function TeamBuilder({ appState, updateAppState }: TeamBuilderProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <SearchAndFilters 
        searchTerm={appState.searchTerm}
        activeFilters={appState.activeFilters}
        onSearchChange={(searchTerm) => updateAppState({ searchTerm })}
        onFiltersChange={(activeFilters) => updateAppState({ activeFilters })}
      />
      
      <CharacterGrid 
        selectedCharacters={appState.selectedCharacters}
        blacklistedCharacters={appState.blacklistedCharacters}
        searchTerm={appState.searchTerm}
        activeFilters={appState.activeFilters}
        onCharacterSelect={(characters) => updateAppState({ selectedCharacters: characters })}
        onCharacterBlacklist={(characters) => updateAppState({ blacklistedCharacters: characters })}
      />
      
      {appState.selectedCharacters.length > 0 && (
        <SelectedCharacters 
          selectedCharacters={appState.selectedCharacters}
          onGenerate={() => {/* TODO: Implement team generation */}}
          onClear={() => updateAppState({ selectedCharacters: [] })}
        />
      )}
      
      <TeamResults />
    </div>
  )
}