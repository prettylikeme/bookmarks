import JSON5 from 'json5';

const dirTree: Directory = { name: '/' };
/** 路径映射 */
const pathMap: BookmarkPath = new Map([['.', []]]);
/** 标签映射 */
const tagMap: BookmarkTag = new Map();
/** 分类映射 */
const categoryMap: BookmarkCategory = new Map([['未分类', []]]);

const getBookmarkData = async () => {
  return (await import('../../bookmark-data')).default;
};

const bookmarkData = await (async () => {
  let bookmarkData: BookmarkData;
  const bookmarkDataStr = localStorage.getItem('bookmark-data');
  if (bookmarkDataStr === null) {
    bookmarkData = await getBookmarkData();
    localStorage.setItem('bookmark-data', JSON5.stringify(bookmarkData));
  } else {
    bookmarkData = JSON5.parse(bookmarkDataStr);
  }
  return bookmarkData;
})();

for (let item of bookmarkData.data) {
  const path = item.path || '/';
  const tags = item.tags || [];
  const categories = item.categories || [];

  // 处理目录
  {
    const paths = path.split('/').filter((item) => item);
    let dirMap = pathMap;
    let currDir = dirTree;
    for (let dir of paths) {
      let nextDir = currDir.children?.find((item) => item.name === dir);
      if (!nextDir) {
        nextDir = { name: dir };
        currDir.children = [...(currDir.children || []), nextDir];
      }
      currDir = nextDir;

      if (!dirMap.has(dir)) {
        dirMap.set(dir, new Map([['.', []]]));
      }
      dirMap = dirMap.get(dir) as BookmarkPath;
    }
    const arr = dirMap.get('.') as Bookmark[];
    arr.push(item);
  }

  // 处理标签
  for (let tag of tags) {
    if (!tagMap.has(tag)) {
      tagMap.set(tag, []);
    }
    const arr = tagMap.get(tag)!;
    arr.push(item);
  }

  // 处理分类
  if (categories.length > 0) {
    for (let category of categories) {
      if (!categoryMap.has(category)) {
        categoryMap.set(category, []);
      }
      const arr = categoryMap.get(category)!;
      arr.push(item);
    }
  } else {
    categoryMap.get('未分类')!.push(item);
  }
}

console.log(dirTree);
console.log(pathMap);
console.log(tagMap);
console.log(categoryMap);

export { dirTree, pathMap, tagMap, categoryMap };
