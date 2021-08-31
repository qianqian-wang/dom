// //新增
// const div = dom.create('<div>hi</div>')//创建节点

// dom.after(test,div) //新增弟弟

// const div2 = dom.create('<div>tim</div>')
// dom.before(test,div2) //新增哥哥

// dom.append(test,div2)//新增儿子

// const div3 = dom.create('<div>papa</div>')
// dom.wrap(test,div3)//新增爸爸


// //删除
// // const mi=dom.remove(test)//用于删除节点
// // console.log(mi)

// // const nodes=dom.empty(window.empty)//用于删除后代,存起来的array里面包含回车空格等text
// // console.log(nodes)

// // 修改
// dom.attr(test, 'title', 'Hi, I am Frank')//用于读写属性，写属性
// const title = dom.attr(test, 'title')//读属性
// // console.log(`title: ${title}`)

// dom.text(test,'I am Frank1')//写内容
// dom.text(test)//读内容

// dom.html(test,'<div>哎呀呀</div>')//读写html内容

// dom.style(test,{color:'red'})//修改style
// // dom.style(div, 'color', 'red')
// // dom.style(div, 'color')

// dom.class.add(test,'className')//用于添加class
// dom.class.remove(test,'className')//用于删除class
// console.log(dom.class.has(test,'className'))//className是否存在

// const fn=()=>{
//     console.log('点击了')
// }
// dom.on(test,'click',fn)//用于添加事件监听
// dom.off(test,'click',fn)//用于删除事件监听

// //查看
// let a=dom.find('#test2')[0]//用于获取标签或标签们
// let b=dom.find('.red',a)[0]//指定找的范围scope
// // console.log(b)

// // console.log(dom.parent(test))//获取父元素
// // console.log(dom.children(test))//获取子元素
// // console.log(dom.siblings(e1))//获取兄弟姐妹元素

// console.log(dom.next(e1))//获取弟弟
// console.log(dom.previous(e2))//获取弟弟

// const t = dom.find('#travel')[0]
// dom.each(dom.children(t), (n) => dom.style(n, 'color', 'red'))//遍历所有元素

// console.log(dom.index(e1))//获取排行


const div5 = dom.find('#test>.red')[0] // 获取对应的元素
dom.style(div5, 'color', 'yellow') // 设置 div.style.color

const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n)=> console.log(n)) // 遍历 divList 里的所有元素