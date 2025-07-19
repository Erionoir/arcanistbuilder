import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { characters } from '@/data/characters'

interface SelectedCharactersProps {
  selectedCharacters: string[]
  onGenerate: () => void
  onClear: () => void
}

export function SelectedCharacters({ selectedCharacters, onGenerate, onClear }: SelectedCharactersProps) {
  const selectedCharacterData = selectedCharacters.map(name => 
    characters.find(char => char.name === name)
  ).filter(Boolean)

  return (
    <Card className="p-6 mt-8">
      <h3 className="text-lg font-semibold text-accent-gold mb-4">
        Selected Arcanists ({selectedCharacters.length}/2)
      </h3>
      
      <div className="flex flex-wrap gap-4 mb-6">
        {selectedCharacterData.map((character) => (
          <div key={character?.name} className="flex items-center space-x-2">
            <img 
              src={character?.image} 
              alt={character?.name}
              className="w-12 h-16 object-cover rounded"
            />
            <span className="text-text-primary font-medium">{character?.name}</span>
          </div>
        ))}
      </div>
      
      <div className="flex space-x-4">
        <Button onClick={onGenerate} className="flex-1">
          Generate Teams
        </Button>
        <Button variant="outline" onClick={onClear}>
          Clear
        </Button>
      </div>
    </Card>
  )
}