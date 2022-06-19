// 弹窗面板的按钮设置颜色为存储的color
let changeColor = document.getElementById("btn");
chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

changeColor.addEventListener('click', async () => {
  // 定位当前tab
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
  // 执行注入脚本
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor
  })
})

function setPageBackgroundColor () {
  chrome.storage.sync.get('color', ({ color }) => {
    document.body.style.backgroundColor = color
  })
}