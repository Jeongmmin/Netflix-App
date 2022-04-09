# 📺 NetFlix-App
  
> **React**로 [NetFlix](https://www.netflix.com/)를 클론하여 만든 사이트입니다.<br/>
**[The Movie Db Api](https://www.themoviedb.org/?language=ko) 데이터**를 **axios**통신을 이용해서 받아왔고, **React Router**를 통해 페이지를 변경할 수 있도록 설정했습니다.<br/>
각 영화 목록은 **[Swiper](https://swiperjs.com/)** 를 이용하여 편리하게 볼 수 있도록 구현했습니다.<br/>
또한 **React hook**을 사용하여 모달 Overlay 클릭시 창이 닫히는 기능과 keyup이벤트 지연시간 설정을 할 수 있도록 설정하여 다른 페이지에서도 사용할 수 있도록 만들었습니다.


<br/>
<br/>

## 📌 배포 사이트
<div align="center">   
<br/>
    
💡 사이트 이동하기 💡  
  

[🔗 넷플릭스 앱](https://jeongmmin.github.io/Netflix-App/)
  
 
(ctrl + click 시 새창으로 열기)
  
</div>

<br/>
<br/>
 

## 📝 Skill & Preview
<br/>
<br/>
<p align="center">
<img src="https://img.shields.io/badge/Styled Component-DB7093?style=flat-square&logo=styled-components&logoColor=white"/> &nbsp 
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> &nbsp
<img src="https://img.shields.io/badge/React hook-61DAFB?style=flat-square&logo=React&logoColor=white"/> &nbsp
<img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=React Router&logoColor=white"/> &nbsp 
<img src="https://img.shields.io/badge/Swiper-6332F6?style=flat-square&logo=Swiper&logoColor=white"/> &nbsp
<img src="https://img.shields.io/badge/The Movie Database-111111?style=flat-square&logo=The Movie Database&logoColor=01B4E4"/> &nbsp
<br/>
<br/>
<p align="center">
<img src="https://user-images.githubusercontent.com/82005305/161022447-836e5369-7bf3-4194-ae1c-ad68e6d9c560.gif">
</p> 


<br/>
<br/>

## ⚠ Installation

### **앱 실행**

```
"npm run start"
```

### **배포**

```jsx
"npm run build"
```

### react-router-dom

```jsx
  "react-router-dom": "^6.2.2"
```

### styled-components

```jsx
"styled-components": "^5.3.3"
```

### Swiper

```jsx
 "swiper": "^8.0.7"
```



<br/>
<br/>

## 🔍 기능설명

### 1. Nav 창

- Netflix 로고 클릭 시 첫 화면으로 이동합니다.
- 영화 검색 창에 영화 검색 시 검색 가능합니다.
- 창이 스크롤 되면 navbar의 background 색상이 검정색으로 변화 됩니다.

### 2. 배너창

- 현재 있기있는 영화의 정보가 랜덤으로 로드 됩니다.
- Play 버튼 : 영화의 예고편이 재생됩니다.
- 상세정보 버튼 : 영화의 제목, 상영 날짜, 평점, 이미지 등을 볼 수 있는 모달 창이 열립니다.


### 3. Main - 주제별 영화목록 보기

- 최신인기, 시청률 높은 순서대로, 로맨스 영화, 액션 영화 등 카테고리 별로 영화 목록이 구성되어 있습니다.
- 포스터를 옆으로 슬라이드 하면 원하는 만큼 슬라이드가 이동합니다. (Swiper 이용)

### 4. Main - 영화 포스터 클릭시 모달창으로 이동

- 포스터 클릭시 영화의 제목, 상영 날짜, 평점, 이미지 등을 볼 수 있습니다.
- 모달창의 ✖ 버튼 또는 모달 창 밖을 클릭 시 모달창이 꺼집니다.
 
### 5. Footer

- 고객센터, 소개페이지, 문의하기 등 다양한 Netflix의 페이지로 이동하는 링크가 있습니다.

