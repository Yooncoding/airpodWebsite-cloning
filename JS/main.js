(() => {
  // window.pageYOffset; 대신 쓰일 변수
  let yOffSet = 0;
  // currentScene의 이전 섹션높이들의 합
  let prevScrollHeight = 0;
  // 현재 보여지는 scoll_section
  let currentScene = 0;
  const sceneInfo = [{
      // scroll_section-first
      type: 'sticky',
      scrollHeight: 0,
      heightNum: 5,
      objs: {
        container: document.querySelector('#scroll_section-first')
      }
    },
    {
      // scroll_section-second
      type: 'normal',
      scrollHeight: 0,
      heightNum: 5,
      objs: {
        container: document.querySelector('#scroll_section-second')
      }
    },
    {
      // scroll_section-third
      type: 'sticky',
      scrollHeight: 0,
      heightNum: 5,
      objs: {
        container: document.querySelector('#scroll_section-third')
      }
    },
    {
      // scroll_section-forth
      type: 'sticky',
      scrollHeight: 0,
      heightNum: 5,
      objs: {
        container: document.querySelector('#scroll_section-forth')
      }
    },
    {
      // scroll_section-fifth
      type: 'normal',
      scrollHeight: 0,
      heightNum: 5,
      objs: {
        container: document.querySelector('#scroll_section-fifth')
      }
    }
  ];

  function setSectionHeight() {
    // 각 scroll_section에 높이 셋팅
    for (let i = 0; i < sceneInfo.length; i++) {
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
      sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
    }
    // load나 resize될 때 현재 scene 반영하기
    // totalScrollHeight은 새로고침 될때 현재 있는 0~현재있는 페이지의 높이만큼 다 더한값이다.
    yOffSet = window.pageYOffset;
    let totalScrollHeight = 0;
    for (let i = 0; i < sceneInfo.length; i++) {
      totalScrollHeight = totalScrollHeight + sceneInfo[i].scrollHeight;
      if (totalScrollHeight >= yOffSet) {
        currentScene = i;
        break;
      }
    }
    document.body.setAttribute('id', `show_scene-${currentScene}`);
  }

  function scrollLoop() {
    // 현재 scroll위치에 따라 section 구분
    prevScrollHeight = 0;
    // for문은 i가 1 이상일때 부터 시행
    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight = prevScrollHeight + sceneInfo[currentScene].scrollHeight;
    }
    // c가 0일때 prevScrollHeight는 0,sceneInfo[currentScene].scrollHeight)는 4090이다.
    if (yOffSet > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
      currentScene++;
      document.body.setAttribute('id', `show_scene-${currentScene}`);
    }
    if (yOffSet < prevScrollHeight) {
      if (yOffSet == 0) return;
      currentScene--;
      document.body.setAttribute('id', `show_scene-${currentScene}`);
    }
  }

  window.addEventListener('scroll', () => {
    yOffSet = window.pageYOffset;
    scrollLoop();
  });
  window.addEventListener('resize', setSectionHeight);
  window.addEventListener('load', setSectionHeight);

  setSectionHeight();
})();