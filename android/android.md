---
tags: ["android"]
---

# 안드로이드 스튜디오 설치 for Mac

## JVM

Android는 java 기반으로 사용되기 때문에 Java SE를 먼저 설치해야 한다.

터미널에 `java -version` 명령어를 통해 java의 설치 유무를 확인할 수 있다.

::: warning

2018년 7월 부로 Oracle JDK는 Java SE Subscription 라는 이름의 연 단위 유료 구독형 라이센스로 바뀌며, 지속적인 업데이트 & 보안 패치를 받고자 하면 License를 구해야한다.(개인은 2020년 12월 이후로 유료)

안드로이드 스튜디오 내에서만 사용할 것이라면, 스튜디오 안에 내장되어 있는 Open SDK를 사용하는게 낫다.

:::

## Android Studio

### install

::: tip

3.5.3 for Mac

:::

[다운로드 ](https://developer.android.com/studio/?hl=ko)링크를 통해 다운 받을 수 있다.

::: warning

Warning: An error occurred while preparing SDK package Android Support Repository

[stackoverflow](https://stackoverflow.com/questions/43705311/error-with-sdk-package-download-in-android-studio)

:::

설치 도중 위와 같은 오류가 떴다면 관리자 권한에 관한 오류이므로 설정을 다시해주고 기다리면 설치가 제대로 된다.

### start project

설치 완료 이후에 프로젝트를 생성하기 이전에 오른쪽 하단에 `Configure`에서 `SDK Manager`를 통해 안드로이드 버전을 선택해 설치할 수 있다.

[링크](https://developer.android.com/about/dashboards/?hl=ko)를 통해서 안드로이드 점유율을 확인할 수 있다. 19. 12. 22 기준으로 안드로이드 10에 관한 통계가 잡혀있지 않지만, 최신 버전의 경우 10을 기본 설정으로 하고 있다.

2018 ~ 2019 최신 단말 기준 안드로이드 pie(9)가 가장 많이 쓰이고 있으므로 pie를 install 한다.

<TagLinks/>
