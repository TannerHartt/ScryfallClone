export interface Symbols {
  object: string;
  symbol: string;
  svg_uri: string;
  loose_variant: string | null;
  english: string;
  transposable: boolean;
  represents_mana: boolean;
  appears_in_mana_costs: boolean;
  cmc: number;
  funny: boolean;
  colors: [],
  gatherer_alternates: string[];
}

export interface SymbolDto {
  object: string;
  has_more: boolean;
  data: Symbols[];
}

