---
tags: ["vuepress", "vuejs"]
---

# sidebar 항목 자동 추가

::: tip version

Vuepress `v1.2.0`

:::

## intro

현재 VuePress는 Sidebar는 `YAML front matter`를 통해서 Sidebar의 요소를 생성하는 것 이외에 폴더 단위로는 직접 내용을 입력해주어야 한다.

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: [
      {
        title: "Group 1", // required
        path: "/foo/", // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: ["/"]
      }
    ]
  }
};
```

## how to fix

### 1. \$page

루트 디렉토리에 md 파일을 만든 후, Vue파일을 연결할 수 있다. 이 경우 `$page`를 통해 사이트 내의 모든 page 표시가 가능해진다. 그러나 component 단위로 나뉘어져 있는 vuepress에서 `Page`에 있는 데이터를 `Sidebar`로 전달해주려면 Layout을 전부 새로 짜야한다.([Vuepress Git](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/theme-default) 여기서 기본 테마를 가져와 바꿔도 되긴 함)

### 2. 파일 읽어오기

참조해야할 파일들이 프로젝트 내에 있음으로, 이것들의 위치를 찾아서 자동으로 입력되게 만들어 주면 될 것 같다.

<TagLinks/>
