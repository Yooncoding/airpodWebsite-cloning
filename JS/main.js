(() => {
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
  window.addEventListener('resize', setSectionHeight);
  setSectionHeight();
})();