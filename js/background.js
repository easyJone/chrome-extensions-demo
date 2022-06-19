// 后台脚本

// 存储颜色到storage
const color = 'red'
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color })
  console.log('默认背景色color：' + color)
})