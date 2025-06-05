export {};
interface ContextMenuDivider {
  type: 'divider';
}
interface ContextMenuGroup {
  type: 'group';
  disabled?: boolean;
  icon?: string;
  title: string;
  children: ContextMenuItem[];
}
interface ContextMenuItem {
  type: 'action';
  disabled?: boolean;
  event?: string;
  hotkey?: string;
  icon?: string;
  title: string;
}

declare global {
  type MVContextMenuItem =
    | ContextMenuItem
    | ContextMenuDivider
    | ContextMenuGroup;
  interface MvContextMenuAction {
    event: string;
    payload?: any;
  }
}
