import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import type { TeamFilter } from '@/types'

interface SearchAndFiltersProps {
  searchTerm: string
  activeFilters: TeamFilter
  onSearchChange: (term: string) => void
  onFiltersChange: (filters: TeamFilter) => void
}

export function SearchAndFilters({ 
  searchTerm, 
  onSearchChange 
}: SearchAndFiltersProps) {
  return (
    <div className="bg-bg-card rounded-lg p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted" size={16} />
          <Input
            placeholder="Search characters..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Button variant="outline">
          Filters
        </Button>
      </div>
    </div>
  )
}