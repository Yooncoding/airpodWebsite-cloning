(() => {
  // window.pageYOffset; 대신 쓰일 변수
  let yOffSet = 0;
  // currentScene의 이전 섹션높이들의 합
  let prevScrollHeight = 0;
  // 현재 보여지는 scoll_section
  let currentScenen = 0;
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
  }

  function scrollLoop() {
    // 현재 scroll위치에 따라 section 구분
    prevScrollHeight = 0;
    // for문은 i가 1 이상일때 부터 시행
    for (let i = 0; i < currentScenen; i++) {
      prevScrollHeight = prevScrollHeight + sceneInfo[currentScenen].scrollHeight;
    }
    // c가 0일때 prevScrollHeight는 0,sceneInfo[currentScenen].scrollHeight)는 4090이다.
    if (yOffSet > prevScrollHeight + sceneInfo[currentScenen].scrollHeight) {
      currentScenen++;
    }
    if (yOffSet < prevScrollHeight) {
      currentScenen--;
    }
  }

  window.addEventListener('resize', setSectionHeight);
  window.addEventListener('scroll', () => {
    yOffSet = window.pageYOffset;
    scrollLoop();
  });


  setSectionHeight();
})();