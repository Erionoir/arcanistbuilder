import { characters } from '@/data/characters'
import { CharacterCard } from './CharacterCard'
import type { Character, TeamFilter } from '@/types'

interface CharacterGridProps {
  selectedCharacters: string[]
  blacklistedCharacters: string[]
  searchTerm: string
  activeFilters: TeamFilter
  onCharacterSelect: (characters: string[]) => void
  onCharacterBlacklist: (characters: string[]) => void
}

export function CharacterGrid({ 
  selectedCharacters, 
  blacklistedCharacters,
  searchTerm,
  activeFilters,
  onCharacterSelect,
  onCharacterBlacklist 
}: CharacterGridProps) {
  // Filter characters based on search and filters
  const filteredCharacters = characters.filter((character: Character) => {
    // Search filter
    const matchesSearch = character.name.toLowerCase().includes(searchTerm.toLowerCase())
    
    // Other filters
    const matchesAfflatus = activeFilters.afflatus.length === 0 || 
      activeFilters.afflatus.includes(character.afflatus)
    const matchesDamageType = activeFilters.damageType.length === 0 || 
      activeFilters.damageType.includes(character.dmgType)
    const matchesRank = activeFilters.rank.length === 0 || 
      activeFilters.rank.includes(character.rank)
    const matchesRole = activeFilters.role.length === 0 || 
      activeFilters.role.includes(character.role)
    
    return matchesSearch && matchesAfflatus && matchesDamageType && matchesRank && matchesRole
  })

  const toggleCharacterSelection = (characterName: string) => {
    const newSelection = selectedCharacters.includes(characterName)
      ? selectedCharacters.filter(name => name !== characterName)
      : selectedCharacters.length < 2 
        ? [...selectedCharacters, characterName]
        : selectedCharacters

    onCharacterSelect(newSelection)
  }

  const toggleCharacterBlacklist = (characterName: string) => {
    const newBlacklist = blacklistedCharacters.includes(characterName)
      ? blacklistedCharacters.filter(name => name !== characterName)
      : [...blacklistedCharacters, characterName]

    onCharacterBlacklist(newBlacklist)
    
    // Remove from selection if blacklisted
    if (!blacklistedCharacters.includes(characterName)) {
      const newSelection = selectedCharacters.filter(name => name !== characterName)
      onCharacterSelect(newSelection)
    }
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mt-8">
      {filteredCharacters
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((character) => (
          <CharacterCard
            key={character.name}
            character={character}
            isSelected={selectedCharacters.includes(character.name)}
            isBlacklisted={blacklistedCharacters.includes(character.name)}
            onSelect={() => toggleCharacterSelection(character.name)}
            onBlacklist={() => toggleCharacterBlacklist(character.name)}
          />
        ))
      }
    </div>
  )
}