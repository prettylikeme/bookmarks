export {};

declare global {
  /** 书签 */
  interface Bookmark {
    /** 唯一标识 */
    id?: string;
    /** 名称 */
    name: string;
    /** 链接地址 */
    url: string;
    /** 图标 */
    icon?: string;
    /** 描述 */
    desc?: string;
    /** 路径 */
    path?: string;
    /** 分类 */
    categories?: string[];
    /** 标签 */
    tags?: string[];
    /** 访问次数 */
    visited_times?: number;
    /** 创建时间 */
    create_time: string;
    /** 更新时间 */
    update_time?: string;
    /** 最后访问时间 */
    last_visit_time?: string;
  }

  interface BookmarkData {
    /** 版本 */
    version: number;
    /** 数据 */
    data: Bookmark[];
  }

  /** 目录 */
  interface Directory {
    /** 名称 */
    name: string;
    /** 子目录 */
    children?: Directory[];
    /** 书签 */
    bookmarks?: Bookmark[];
  }

  type BookmarkFolder = { name: string; bookmarks: Bookmark[] };
  type BookmarkPath = Map<string, BookmarkPath | BookmarkFolder>;
  type BookmarkTag = Map<string, Bookmark[]>;
  type BookmarkCategory = Map<string, Bookmark[]>;
}
