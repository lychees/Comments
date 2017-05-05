- 随时随地留下见解。
- 与最好的好友分享私密。
- 与志同道合的朋友不期而遇。

## Switch
- 开启时显示渲染过的页面，关闭时显示正常的页面
  
## Fliter
- Friends 好友
- Groups 组群
- Top 热门
- Random 随机
  
## Comments
- Text Tool
  类似 Photoshop 的文字框工具。
- Paint Tool
- Upload Tool
  - PNG
  - Custom JavaScript
  
## Permission 可以设置评论的权限
- Pravite 自己可见
- Protect 好友可见
- Public 公开

```
class Comment{
  string owner;
  string url;
  int timestamp;
  enum permission;
}

class Text : public Comment{
  string text;
  pair<int, int> coordinate;
}
```
  
 
