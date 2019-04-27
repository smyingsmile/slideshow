// 轮播图
let nextIndex = (slide, offset) => {
    let numberOfImgs = Number(slide.dataset.imgs)
    let activeIndex = Number(slide.dataset.active)
    let i = (activeIndex + offset + numberOfImgs) % numberOfImgs
    return i
}

let bindEventSlide = () => {
    let selector = '.smy-slide-button'
    bindAll(selector, 'click', function(event) {
        let button = event.target
        // 找到 slide div
        let slide = button.parentElement
        // 求出下一张图片的 index
        let offset = Number(button.dataset.offset)
        let index = nextIndex(slide, offset)
        // 显示下一张图片
        showImageAtIndex(slide, index)
    })
}

let showImageAtIndex = (slide, index) => {
    let nextIndex = index
    // 设置父节点的 data-active
    slide.dataset.active = nextIndex
    // 删除当前图片的 class 给下一张图片加上 class
    let className = 'smy-active'
    removeClassAll(className)
    // 得到下一张图片的选择器
    let nextSelector = '#id-smyimage-' + String(nextIndex)
    let img = e(nextSelector)
    img.classList.add(className)
    // 切换小圆点
    // 删除当前小圆点的 class
    removeClassAll('smy-white')
    // 得到下一个小圆点的选择器
    let indiSelector = '#id-indi-' + String(nextIndex)
    let indi = e(indiSelector)
    indi.classList.add('smy-white')
}

let bindEventIndicator = () => {
    let selector = '.smy-slide-indi'
    bindAll(selector, 'mouseover', (event) => {
        let self = event.target
        let index = Number(self.dataset.index)
        // 直接播放第 n 张图片
        let slide = self.closest('.smy-slide')
        showImageAtIndex(slide, index)
    })
}

let playNextImage = () => {
    let slide = e('.smy-slide')
    // 求出下一张图片的 index
    let index = nextIndex(slide, 1)
    // 显示下一张图片
    showImageAtIndex(slide, index)
}

let autoPlay = () => {
    let interval = 5000
    setInterval(() => {
        // 每 5s 都会调用这个函数
        playNextImage()
    }, interval)
}

let _main = () => {
    bindEventSlide()
    bindEventIndicator()
    autoPlay()
}

_main()
