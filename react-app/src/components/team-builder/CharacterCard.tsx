import { X } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { Character } from '@/types'

interface CharacterCardProps {
  character: Character
  isSelected?: boolean
  isBlacklisted?: boolean
  onSelect?: () => void
  onBlacklist?: () => void
  showBlacklistButton?: boolean
}

export function CharacterCard({ 
  character, 
  isSelected = false,
  isBlacklisted = false,
  onSelect,
  onBlacklist,
  showBlacklistButton = true
}: CharacterCardProps) {
  const rarityStars = '★'.repeat(character.rarity)

  return (
    <Card 
      className={cn(
        "relative cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-gold",
        isSelected && "ring-2 ring-accent-gold shadow-gold",
        isBlacklisted && "opacity-50 grayscale"
      )}
      onClick={onSelect}
    >
      {showBlacklistButton && (
        <button
          className="absolute top-2 right-2 z-10 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors"
          onClick={(e) => {
            e.stopPropagation()
            onBlacklist?.()
          }}
          title={isBlacklisted ? `Remove ${character.name} from blacklist` : `Blacklist ${character.name}`}
        >
          <X size={12} />
        </button>
      )}
      
      <div className="aspect-[3/4] overflow-hidden rounded-t-lg">
        <img 
          src={character.image} 
          alt={character.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = 'https://placehold.co/150x200/1F1B15/D4A574?text=Error'
          }}
        />
      </div>
      
      <div className="p-3">
        <h3 className="font-semibold text-text-primary text-sm text-center truncate">
          {character.name}
        </h3>
        <p className="text-accent-gold text-xs text-center mt-1">
          {rarityStars}
        </p>
        
        <div className="flex items-center justify-center space-x-2 mt-2">
          <img 
            src={`/assets/afflatus/${character.afflatus}.png`} 
            alt={character.afflatus}
            className="w-4 h-4"
          />
          <span className="text-xs text-text-muted">
            {character.dmgType}
          </span>
        </div>
        
        <div className="text-center mt-1">
          <span className={cn(
            "text-xs px-2 py-1 rounded",
            character.rank === 'S+' && "bg-red-500 text-white",
            character.rank === 'S' && "bg-orange-500 text-white",
            character.rank === 'A+' && "bg-yellow-500 text-white",
            character.rank === 'A' && "bg-green-500 text-white",
            character.rank === 'B' && "bg-blue-500 text-white"
          )}>
            {character.rank}
          </span>
        </div>
      </div>
    </Card>
  )
}