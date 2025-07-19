export interface Character {
  name: string;
  rarity: number;
  image: string;
  afflatus: "Beast" | "Intellect" | "Mineral" | "Plant" | "Spirit" | "Star";
  dmgType: "Mental" | "Reality";
  rank: "S+" | "S" | "A+" | "A" | "B" | "C";
  role: "DPS" | "Sub DPS" | "Support" | "Survival";
  idleAudio?: string;
  profile?: CharacterProfile;
}

export interface CharacterProfile {
  bio?: string;
  inheritance?: Inheritance[];
  effects?: Record<string, string>;
  incantations?: Incantation[];
  gallery?: GalleryItem[];
}

export interface Inheritance {
  name: string;
  level: number;
  icon: string;
  description: string;
}

export interface Incantation {
  name: string;
  type: string;
  image: string;
  ranks: IncantationRank[];
}

export interface IncantationRank {
  rank: string;
  rankType?: string;
  description: string;
}

export interface GalleryItem {
  name: string;
  image: string;
  description: string;
  source: string;
}

export interface TeamFilter {
  afflatus: string[];
  damageType: string[];
  rank: string[];
  role: string[];
}

export interface AppState {
  selectedCharacters: string[];
  blacklistedCharacters: string[];
  currentView: "team-builder" | "tier-list" | "library" | "roadmap";
  searchTerm: string;
  activeFilters: TeamFilter;
  numTeamsToGenerate: number;
}