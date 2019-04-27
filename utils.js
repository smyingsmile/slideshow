let log = console.log.bind(console)
// let log = (...args) => {
//     console.log(args)
// }

let e = (selector) => {
    let element = document.querySelector(selector)
    if (element == null) {
        let s = `元素没找到，选择器 ${selector} 没有找到或者 js 没有放在 body 里`
        alert(s)
    } else {
        return element
    }
}

let es = (selector) => {
    let elements = document.querySelectorAll(selector)
    if (elements.length == 0) {
        let s = `元素没找到，选择器 ${selector} 没有找到或者 js 没有放在 body 里`
        alert(s)
    } else {
        return elements
    }
}
let appendHtml = (element, html) => {
    element.insertAdjacentHTML('beforeend', html)
}

let bindEvent = (element, eventName, callback) => {
    element.addEventListener(eventName, callback)
}

let removeClassAll = (className) => {
    let selector = '.' + className
    let elements = es(selector)
    for (let i = 0; i < elements.length; i++) {
        let e = elements[i]
        log('classname', className, e)
        e.classList.remove(className)
    }
}

let bindAll = (selector, eventName, callback) => {
    let elements = es(selector)
    for (let i = 0; i < elements.length; i++) {
        let e = elements[i]
        bindEvent(e, eventName, callback)
    }
}

// find 函数可以查找 element 的所有子元素
let find = (element, selector) => {
    let e = element.querySelector(selector)
    if (e == null) {
        let s = `元素没找到，选择器 ${selector} 没有找到或者 js 没有放在 body 里`
        alert(s)
    } else {
        return e
    }
}

let closestClass = (element, className) => {
    let e = element
    while (e != null) {
        if (e.classList.contains(className)) {
            return e
        } else {
            e = e.parentElement
        }
    }
    return null
}

let closestId = (element, idName) => {
    let e = element
    while (e != null) {
        // 判断 e 的 id 是否为 idName
        if (e.id == idName) {
            return e
        } else {
            e = e.parentElement
        }
    }
    return null
}

let closestTag = (element, tagName) => {
    let e = element
    while (e != null) {
        // 判断 e 是否和 tagName 的标签名相等
        if (e.tagName.toUpperCase() == tagName.toUpperCase()) {
            return e
        } else {
            e = e.parentElement
        }
    }
    return null
}

let closest = (element, selector) => {
    let c = selector[0]
    if (c == '.') {
        let className = selector.slice(1)
        return closestClass(element, className)
    } else if (c == '#') {
        let idName = selector.slice(1)
        return closestId(element, idName)
    } else {
        let tag = selector
        return closestTag(element, tag)
    }
}
