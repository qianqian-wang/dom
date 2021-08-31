window.dom = {
    create(string) {//创建节点
        const container = document.createElement('template');
        container.innerHTML = string;
        return container.content.firstChild;
    },
    after(node,node2){//新增弟弟
        node.parentNode.insertBefore(node2,node.nextSibling)
    },
    before(node,node2){//新增哥哥
        node.parentNode.insertBefore(node2,node)
    },
    append(node,child){//新增儿子
        // node.insertBefore(child,node.firstChild)
        node.appendChild(child)
    },
    wrap(node,parent){//新增爸爸
        dom.before(node,parent)
        dom.append(parent,node)
    },
    remove(node){//删除节点
        node.parentNode.removeChild(node)
        return node
    },
    empty(node){//删除后代
        const array=[]
        let x=node.firstChild
        while(x){
            array.push(dom.remove(x))
            x=node.firstChild
        }
        return array
    },
    attr(node,key,value){//读写属性 重载
        if(arguments.length===2){
            return node.getAttribute(key)
        }else if(arguments.length===3){
            node.setAttribute(key,value)
        }
    },
    text(node,value){
        if(arguments.length===2){//写内容
            if('innerText' in node){//适配
                node.innerText=value 
            }else{
                node.textContent=value
            }
        }else if(arguments.length===1){//读内容
            if('innerText' in node){//适配
                return node.innerText
            }else{
                return node.textContent
            }          
        }
    },
    html(node,value){//读写html
        if(arguments.length===2){
            node.innerHTML=value
        }else if(arguments.length===1){
            return node.innerHTML
        }
    },
    style(node,key,value){//读写style
        if(arguments.length===3){
            // dom.style(div, 'color', 'red')
            node.style[key]=value
        }else if(arguments.length===2){
            // dom.style(div, 'color')
           if(typeof key==='string'){
               return node.style[key]
           }else if(key instanceof Object){
               // dom.style(div, {color: 'red'})
               const object=key
               for(let name in object){
                   console.log(name)
                   node.style[name]=object[name]
               }
           }
        }
    },
    class:{
        add(node,className){//添加class
            node.classList.add(className)
        },
        remove(node,className){//删除class
            node.classList.remove(className)
        },
        has(node, className){//判断class是否存在
          return node.classList.contains(className)
        }
    },
    on(node,eventName,fn){//添加监听
        node.addEventListener(eventName,fn)
    },
    off(node,eventName,fn){//删除监听
        node.removeEventListener(eventName,fn)
    },
    find(selector,scope){//获取标签、获取scope内的标签
        return (scope||document).querySelectorAll(selector)
    },
    parent(node){//获取父元素
        return node.parentNode
    },
    children(node){
        return node.children
    },
    siblings(node){//兄弟节点
        return Array.from(node.parentNode.children).filter(n=>n!==node)
    },
    next(node){//弟弟
        let x=node.nextSibling
        while(x&&x.nodeType===3){//去除文本节点
            x=x.nextSibling
        }
        return x
    },
    previous(node){//哥哥
        let x=node.previousSibling
        while(x&&x.nodeType===3){//去除文本节点
            x=x.previousSibling
        }
        return x
    },
    each(nodeList,fn){//遍历所有节点
        for(let i=0;i<nodeList.length;i++){
            fn.call(null,nodeList[i])
        }
    },
    index(node){//获取排行老几
        const list = dom.children(node.parentNode)
        let i
        for (i = 0; i < list.length; i++){
            if (list[i] === node) {
                break
            }
        }
        return i
    }
};

