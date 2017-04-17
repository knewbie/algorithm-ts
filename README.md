## 基础数据结构与算法实现（`TypeScript`版）

### What's this
这个仓库的代码实现，是在阅读《数据结构与算法JavaScript描述》时，用`TypeScript` 将书中所涉及的数据结构与算法的实现版，具体的实现跟书中的实现有出入，根据实际应用中的需要，可以进一步拓展其功能与应用。

数据结构与算法列表：
- [X] 列表（List)
- [X] 队列（Queue)
- [X] 栈（Stack)
- [X] 链表（LinkedList)
    - [X] 单链表（List)
    - [X] 双向链表（DLList)
    - [X] 环链表（CLList)
- [X] 字典（Dict)
- [X] 集合（Set)
- [X] 二叉树（BiTree)
    - [X] 二叉查找树（BST)
- [ ] 图（Grap)


（未完待续....)

### How To Run ＆ Test
每个对应的数据结构都有一个test_XXX的测试文件，
测试时需要先将TS文件用`tsc`编译器，编译为`js`文件，然后再用`node`执行对应的js文件：
```bash
    # 举个例子
    $ tsc test_List.ts
    $ node test_List.js 
    # 每次改变ts文件都需要重新编译，这个可以考虑加入fs Watch,让其在后台一直监控，每次有变动，直接编译
```

### Note
`util.ts`文件里包涵了一些共用的函数实现，目前只有一个`compare`函数，后续如果有需要共用的，都将在些文件中实现。