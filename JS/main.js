(() => {
  // window.pageYOffset; 대신 쓰일 변수
  let yOffSet = 0;
  // currentScene의 이전 섹션높이들의 합
  let prevScrollHeight = 0;
  // 현재 보여지는 scoll_section
  let currentScene = 0;
  // scene 바뀌는 곳 체크 
  let enterNewScene = false;
  const sceneInfo = [{
      // scroll_section-first
      type: 'sticky',
      scrollHeight: 0,
      heightNum: 5,
      objs: {
        container: document.querySelector('#scroll_section-first'),
        mentionFirst: document.querySelector('#scroll_section-first .main_mention.first'),
        mentionSecond: document.querySelector('#scroll_section-first .main_mention.second'),
        mentionThird: document.querySelector('#scroll_section-first .main_mention.third'),
        mentionForth: document.querySelector('#scroll_section-first .main_mention.forth')
      },
      values: {
        mentionFirst_opacity: [0, 1]
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
    enterNewScene = false;
    // for문은 i가 1 이상일때 부터 시행
    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight = prevScrollHeight + sceneInfo[currentScene].scrollHeight;
    }
    // c가 0일때 prevScrollHeight는 0,sceneInfo[currentScene].scrollHeight)는 4090이다.
    if (yOffSet > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
      enterNewScene = true;
      currentScene++;
      document.body.setAttribute('id', `show_scene-${currentScene}`);
    }
    if (yOffSet < prevScrollHeight) {
      if (yOffSet == 0) return;
      enterNewScene = true;
      currentScene--;
      document.body.setAttribute('id', `show_scene-${currentScene}`);
    }
    // scene 바뀌는 곳에서 한번 scrollLoop 탈출 -> 일시적으로 바뀌는부분에서 -가 나오므로 그떼 playAnimaitionn 실행 않도록
    if (enterNewScene) return;
    playAnimation();
  }

  // 여기 들어가는 변수는 values 오브젝트
  function clacValuese(values, currentYOffset) {
    let scrollRatio = currentYOffset / sceneInfo[currentScene].scrollHeight;
    return scrollRatio * (values[1] - values[0]) + values[0];
  }

  function playAnimation() {
    const objs = sceneInfo[currentScene].objs;
    const values = sceneInfo[currentScene].values;
    const currentYOffset = yOffSet - prevScrollHeight;
    // console.log(currentScene, currentYOffset);
    switch (currentScene) {
      case 0:
        let mentionFirst_opacity_in = clacValuese(values.mentionFirst_opacity, currentYOffset);
        objs.mentionFirst.style.opacity = mentionFirst_opacity_in;
        console.log((clacValuese(values.mentionFirst_opacity, currentYOffset)));
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
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