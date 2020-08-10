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
      type: "sticky",
      scrollHeight: 0,
      heightNum: 5,
      objs: {
        container: document.querySelector("#scroll_section-first"),
        mentionFirst: document.querySelector("#scroll_section-first .main_mention.first"),
        mentionSecond: document.querySelector("#scroll_section-first .main_mention.second"),
        mentionThird: document.querySelector("#scroll_section-first .main_mention.third"),
        mentionForth: document.querySelector("#scroll_section-first .main_mention.forth"),
      },
      values: {
        // in
        mentionFirst_opacity_in: [
          0,
          1,
          {
            start: 0.1,
            end: 0.2,
          },
        ],
        mentionFirst_translateY_in: [
          20,
          0,
          {
            start: 0.1,
            end: 0.2,
          },
        ],
        mentionSecond_opacity_in: [
          0,
          1,
          {
            start: 0.3,
            end: 0.4,
          },
        ],
        mentionSecond_translateY_in: [
          20,
          0,
          {
            start: 0.3,
            end: 0.4,
          },
        ],
        mentionThird_opacity_in: [
          0,
          1,
          {
            start: 0.5,
            end: 0.6,
          },
        ],
        mentionThird_translateY_in: [
          20,
          0,
          {
            start: 0.5,
            end: 0.6,
          },
        ],
        mentionForth_opacity_in: [
          0,
          1,
          {
            start: 0.7,
            end: 0.8,
          },
        ],
        mentionForth_translateY_in: [
          20,
          0,
          {
            start: 0.7,
            end: 0.8,
          },
        ],
        // out
        mentionFirst_opacity_out: [
          1,
          0,
          {
            start: 0.25,
            end: 0.3,
          },
        ],
        mentionFirst_translateY_out: [
          0,
          -20,
          {
            start: 0.25,
            end: 0.3,
          },
        ],
        mentionSecond_opacity_out: [
          1,
          0,
          {
            start: 0.45,
            end: 0.5,
          },
        ],
        mentionSecond_translateY_out: [
          0,
          -20,
          {
            start: 0.45,
            end: 0.5,
          },
        ],
        mentionThird_opacity_out: [
          1,
          0,
          {
            start: 0.65,
            end: 0.7,
          },
        ],
        mentionThird_translateY_out: [
          0,
          -20,
          {
            start: 0.65,
            end: 0.7,
          },
        ],
        mentionForth_opacity_out: [
          1,
          0,
          {
            start: 0.85,
            end: 0.9,
          },
        ],
        mentionForth_translateY_out: [
          0,
          -20,
          {
            start: 0.85,
            end: 0.9,
          },
        ],
      },
    },
    {
      // scroll_section-second
      type: "normal",
      scrollHeight: 0,
      heightNum: 5, //type: "normal"에선 있으나 마나
      objs: {
        container: document.querySelector("#scroll_section-second"),
      },
    },
    {
      // scroll_section-third
      type: "sticky",
      scrollHeight: 0,
      heightNum: 5,
      objs: {
        container: document.querySelector("#scroll_section-third"),
        mentionFirst: document.querySelector("#scroll_section-third .main_mention.first"),
        mentionSecond: document.querySelector("#scroll_section-third .desc_mention.second"),
        mentionThird: document.querySelector("#scroll_section-third .desc_mention.third"),
        pinFirst: document.querySelector("#scroll_section-third .second .pin"),
        pinSecond: document.querySelector("#scroll_section-third .third .pin"),
      },
      values: {
        // in
        mentionFirst_opacity_in: [
          0,
          1,
          {
            start: 0.25,
            end: 0.3,
          },
        ],
        mentionFirst_translateY_in: [
          20,
          0,
          {
            start: 0.15,
            end: 0.2,
          },
        ],
        mentionSecond_opacity_in: [
          0,
          1,
          {
            start: 0.6,
            end: 0.65,
          },
        ],
        mentionSecond_translateY_in: [
          30,
          0,
          {
            start: 0.6,
            end: 0.65,
          },
        ],
        mentionThird_opacity_in: [
          0,
          1,
          {
            start: 0.87,
            end: 0.92,
          },
        ],
        mentionThird_translateY_in: [
          30,
          0,
          {
            start: 0.87,
            end: 0.92,
          },
        ],
        // out
        mentionFirst_opacity_out: [
          1,
          0,
          {
            start: 0.4,
            end: 0.45,
          },
        ],
        mentionFirst_translateY_out: [
          0,
          -20,
          {
            start: 0.4,
            end: 0.45,
          },
        ],
        mentionSecond_opacity_out: [
          1,
          0,
          {
            start: 0.68,
            end: 0.73,
          },
        ],
        mentionSecond_translateY_out: [
          0,
          -20,
          {
            start: 0.68,
            end: 0.73,
          },
        ],
        mentionThird_opacity_out: [
          1,
          0,
          {
            start: 0.95,
            end: 1.0,
          },
        ],
        mentionThird_translateY_out: [
          0,
          -20,
          {
            start: 0.95,
            end: 1.0,
          },
        ],
        pinFirst_scaleY: [
          0.5,
          1,
          {
            start: 0.6,
            end: 0.65,
          },
        ],
        pinSecond_scaleY: [
          0.5,
          1,
          {
            start: 0.87,
            end: 0.92,
          },
        ],
      },
    },
    {
      // scroll_section-forth -> 요친구에 canvas들어감
      type: "sticky",
      scrollHeight: 0,
      heightNum: 5,
      objs: {
        container: document.querySelector("#scroll_section-forth"),
      },
    },
    {
      // scroll_section-fifth
      type: "normal",
      scrollHeight: 0,
      heightNum: 5, //type: "normal"에선 있으나 마나
      objs: {
        container: document.querySelector("#scroll_section-fifth"),
      },
    },
  ];

  function setSectionHeight() {
    // 각 scroll_section에 높이 셋팅
    for (let i = 0; i < sceneInfo.length; i++) {
      if (sceneInfo[i].type === 'sticky') {
        sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
      } else if (sceneInfo[i].type === 'normal') {
        sceneInfo[i].scrollHeight = sceneInfo[i].objs.container.offsetHeight;
      }
      sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
    }
    // load나 resize될 때 현재 scene 반영하기
    // totalScrollHeight은 새로고침 될때 현재 있는 0~현재있는 페이지의 높이만큼 다 더한값이다.

    yOffset = window.pageYOffset;
    let totalScrollHeight = 0;
    for (let i = 0; i < sceneInfo.length; i++) {
      totalScrollHeight += sceneInfo[i].scrollHeight;
      if (totalScrollHeight >= yOffset) {
        currentScene = i;
        break;
      }
    }
    document.body.setAttribute("id", `show_scene-${currentScene}`);
  }

  function scrollLoop() {
    // 현재 scroll위치에 따라 section 구분
    prevScrollHeight = 0;
    enterNewScene = false;
    // for문은 i가 1 이상일때 부터 시행
    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight += sceneInfo[i].scrollHeight;
    }
    // c가 0일때 prevScrollHeight는 0,sceneInfo[currentScene].scrollHeight)는 4090이다.
    if (yOffSet > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
      enterNewScene = true;
      currentScene++;
      document.body.setAttribute("id", `show_scene-${currentScene}`);
    }
    if (yOffSet < prevScrollHeight) {
      if (yOffSet == 0) return;
      enterNewScene = true;
      currentScene--;
      document.body.setAttribute("id", `show_scene-${currentScene}`);
    }
    // scene 바뀌는 곳에서 한번 scrollLoop 탈출 -> 일시적으로 바뀌는부분에서 -가 나오므로 그떼 playAnimaitionn 실행 않도록
    if (enterNewScene) return;
    playAnimation();
  }

  // 여기 들어가는 변수는 values 오브젝트
  function clacValuese(values, currentYOffset) {
    let returnValues = 0;
    const scrollHeight = sceneInfo[currentScene].scrollHeight;
    const scrollRatio = currentYOffset / scrollHeight;
    if (values.length === 3) {
      // values.length가 3이라는것은 start와 end, 구간이 정해져있다는 것
      const partScrollStart = values[2].start * scrollHeight;
      const partScrollEnd = values[2].end * scrollHeight;
      const partScrollHeight = partScrollEnd - partScrollStart;
      if (currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd) {
        returnValues = ((currentYOffset - partScrollStart) / partScrollHeight) * (values[1] - values[0]) + values[0];
      } else if (currentYOffset < partScrollStart) {
        returnValues = values[0];
      } else if (currentYOffset > partScrollEnd) {
        returnValues = values[1];
      }
    } else {
      // else일때는 section전체가 구간이라는 것
      returnValues = scrollRatio * (values[1] - values[0]) + values[0];
    }
    return returnValues;
  }

  function playAnimation() {
    const objs = sceneInfo[currentScene].objs;
    const values = sceneInfo[currentScene].values;
    const currentYOffset = yOffSet - prevScrollHeight;
    const scrollHeight = sceneInfo[currentScene].scrollHeight;
    const scrollRatio = currentYOffset / scrollHeight;
    // console.log(currentScene, currentYOffset);
    switch (currentScene) {
      case 0:
        // mentionFirst 세팅
        if (scrollRatio <= 0.22) {
          objs.mentionFirst.style.opacity = clacValuese(values.mentionFirst_opacity_in, currentYOffset);;
          objs.mentionFirst.style.transform = `translate3d(0, ${clacValuese(values.mentionFirst_translateY_in, currentYOffset)}%, 0)`;
        } else if (scrollRatio > 0.22) {
          objs.mentionFirst.style.opacity = clacValuese(values.mentionFirst_opacity_out, currentYOffset);
          objs.mentionFirst.style.transform = `translate3d(0, ${clacValuese(values.mentionFirst_translateY_out, currentYOffset)}%, 0)`;
        }
        // mentionSecond 세팅
        if (scrollRatio <= 0.42) {
          objs.mentionSecond.style.opacity = clacValuese(values.mentionSecond_opacity_in, currentYOffset);
          objs.mentionSecond.style.transform = `translate3d(0, ${clacValuese(values.mentionSecond_translateY_in, currentYOffset)}%, 0)`;
        } else if (scrollRatio > 0.42) {
          objs.mentionSecond.style.opacity = clacValuese(values.mentionSecond_opacity_out, currentYOffset);
          objs.mentionSecond.style.transform = `translate3d(0, ${clacValuese(values.mentionFirst_translateY_out, currentYOffset)}%, 0)`;
        }
        // mentionThird 세팅
        if (scrollRatio <= 0.62) {
          objs.mentionThird.style.opacity = clacValuese(values.mentionThird_opacity_in, currentYOffset);
          objs.mentionThird.style.transform = `translate3d(0, ${clacValuese(values.mentionThird_translateY_in, currentYOffset)}%, 0)`;
        } else if (scrollRatio > 0.62) {
          objs.mentionThird.style.opacity = clacValuese(values.mentionThird_opacity_out, currentYOffset);
          objs.mentionThird.style.transform = `translate3d(0, ${clacValuese(values.mentionThird_translateY_out, currentYOffset)}%, 0)`;
        }
        // mentionForth 세팅
        if (scrollRatio <= 0.82) {
          objs.mentionForth.style.opacity = clacValuese(values.mentionForth_opacity_in, currentYOffset);
          objs.mentionForth.style.transform = `translate3d(0, ${clacValuese(values.mentionForth_translateY_in, currentYOffset)}%, 0)`;
        } else if (scrollRatio > 0.82) {
          objs.mentionForth.style.opacity = clacValuese(values.mentionForth_opacity_out, currentYOffset);
          objs.mentionForth.style.transform = `translate3d(0, ${clacValuese(values.mentionForth_translateY_out, currentYOffset)}%, 0)`;
        }
        break;
      case 1:
        break;
      case 2:
        // First 세팅
        if (scrollRatio <= 0.32) {
          objs.mentionFirst.style.opacity = clacValuese(values.mentionFirst_opacity_in, currentYOffset);
          objs.mentionFirst.style.transform = `translate3d(0, ${clacValuese(values.mentionFirst_translateY_in, currentYOffset)}%, 0)`;
        } else if (scrollRatio > 0.32) {
          objs.mentionFirst.style.opacity = clacValuese(values.mentionFirst_opacity_out, currentYOffset);
          objs.mentionFirst.style.transform = `translate3d(0, ${clacValuese(values.mentionFirst_translateY_out, currentYOffset)}%, 0)`;
        }
        // Second 세팅
        if (scrollRatio <= 0.67) {
          objs.mentionSecond.style.opacity = clacValuese(values.mentionSecond_opacity_in, currentYOffset);
          objs.mentionSecond.style.transform = `translate3d(0, ${clacValuese(values.mentionSecond_translateY_in, currentYOffset)}%, 0)`;
          objs.pinFirst.style.transform = `scaleY(${clacValuese(values.pinFirst_scaleY, currentYOffset)})`;
        } else if (scrollRatio > 0.67) {
          objs.mentionSecond.style.opacity = clacValuese(values.mentionSecond_opacity_out, currentYOffset);
          objs.mentionSecond.style.transform = `translate3d(0, ${clacValuese(values.mentionSecond_translateY_out, currentYOffset)}%, 0)`;
          objs.pinFirst.style.transform = `scaleY(${clacValuese(values.pinFirst_scaleY, currentYOffset)})`;
        }
        // Third 세팅
        if (scrollRatio <= 0.93) {
          objs.mentionThird.style.opacity = clacValuese(values.mentionThird_opacity_in, currentYOffset);
          objs.mentionThird.style.transform = `translate3d(0, ${clacValuese(values.mentionThird_translateY_in, currentYOffset)}%, 0)`;
          objs.pinSecond.style.transform = `scaleY(${clacValuese(values.pinSecond_scaleY, currentYOffset)})`;
        } else if (scrollRatio > 0.93) {
          objs.mentionThird.style.opacity = clacValuese(values.mentionThird_opacity_out, currentYOffset);
          objs.mentionThird.style.transform = `translate3d(0, ${clacValuese(values.mentionThird_translateY_out, currentYOffset)}%, 0)`;
          objs.pinSecond.style.transform = `scaleY(${clacValuese(values.pinSecond_scaleY, currentYOffset)})`;
        }
        break;
      case 3:
        break;
      case 4:
        break;
    }
  }
  window.addEventListener("scroll", () => {
    yOffSet = window.pageYOffset;
    scrollLoop();
  });
  window.addEventListener("resize", setSectionHeight);
  window.addEventListener("load", setSectionHeight);

  setSectionHeight();
})();