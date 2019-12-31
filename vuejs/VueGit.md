---
tags: ["vuepress", "vuejs"]
---

## Static Site Generator

- 서버는 완성된 HTML을 가지고 있으며, 클라이언트 요청에 의해 전달
- 모양의 정적을 뜻하는 것이 아니라, 포스트가 올라간 시점에서 모든 페이지가 정적으로 완결된다는 것을 의미함. (변형이 쉽지 않음)

```
장점
- HYML만 제공하면 되므로 웹서버 설정이 간편하다.
- DB관리 등 운영에 필요한 자원 소모가 거의 없다.
- 기본 컨텐츠가 md파일이므로, 다른 플랫폼으로 이전이 쉽다.
```

[이 블로그](https://blog.nacyot.com/articles/2014-01-15-static-site-generator/)에서 자세하게 설명이 되어있다.

## VuePress

기술문서작성을 위해 최적화된 기본테마를 제공해줍니다.

Plugin API를 제공해주어서 플러그인을 제작하거나 적용할수있습니다.( 뷰프레스가 공식적으로 지원해주는 플러그인을 사용하면 Google Analytics, PWA를 손쉽게 적용가능함. )

#### 기본 설치 및 빌드

```sh
# install globally
npm install -g vuepress
# create the project folder
mkdir docs && cd docs
# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
vuepress dev
```

vuepress는 config 파일이 없더라도 dev, build가 가능하지만, vuepress가 지원해주는 기능들을 사용하거나 커스터마이징하기위해서는 config파일(또는 폴더)를 생성하는것이 좋습니다.

#### 디렉토리 구조

[추천 구조](https://vuepress.vuejs.org/guide/directory-structure.html#default-page-routing)

```sh
.
├── docs
│   ├── .vuepress (Optional)
│   │   ├── components (Optional)
│   │   ├── config.js (Optional)
│   ├── README.md
│   ├── about
│   │   └── README.md
│   └── config.md
│
└── package.json
```

---

### Default Theme Config

[Docs](https://vuepress.vuejs.org/theme/) 참고

#### .vuepress/config.js

config.js에 vuepress의 기본적인 설정을 하거나, 플러그인 추가, 사이트 메타정보 설정 등을 하게됩니다.

```sh
cd docs
mkdir .vuepress
code config.js
```

```javascript
// docs/.vuepress/config.js
module.exports = {
  title: "VuePress Start",
  description: "Hello VuePress"
};
```

::: warning

vuepress dev로 구동 시 파일 변경을 감지하고 오류를 리턴한다.

warning Override existing page /.

변경된 내용을 적용하기 위해서 Ctrl + C 로 종료 후 다시 시동

:::

---

#### [Navbar](https://vuepress.vuejs.org/theme/default-theme-config.html#navbar)

```sh
# docs
mkdir about
echo '# About Page' > README.md
```

```javascript
module.exports = {
  title: "VuePress Start",
  description: "Hello VuePress",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "about", link: "/about/" },
      {
        text: "Github",
        link: "https://github.com/kshm2483",
        target: "_blank",
        rel: "noopener"
      }
    ]
  }
};
```

::: danger

라우팅에서 `/about/`이 아닌 `/about`으로 설정할 경우 `/about.md`를 렌더링하게 됨

:::

nav에 link를 통해 외부 링크로 연결할 수 있다. 하지만 내 Github로 갈거기 때문에 vuepress에서 지원하는 `repo`기능을 사용

```javascript
```

---

#### [Sidebar](https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar)

---

#### Official Plugins

---

#### extension

---

<TagLinks/>
