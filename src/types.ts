export type PageId = "dashboard" | "produtos" | "entregas" | "recebimentos" | "perfil" | "configs" ;

export interface NavItem {
  id: PageId;
  label: string;
}