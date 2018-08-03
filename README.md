# react-test
react test demo

# react 学习网站汇总
0. [脚手架工具 create-react-app 命令行工具系统讲解](https://www.cnblogs.com/ye-hcj/p/7191153.html)
1. react 基本用法：http://www.runoob.com/react/react-tutorial.html
2. react 中文官网文档：https://doc.react-china.org/docs/hello-world.h文档.。官网底部有很多连接，如果有时间可以都看一下。
3. 可以了解下Flow：https://flow.org/en/docs/getting-st可以了解下
4. react 设计思想：https://github.com/react-guide/react-basic

# redux 
0. http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html
    - 这篇较好理解
    - redux 状态管理其实就是一个观察者模式的实现
    - 异步的代码很好

        ```
            export default function applyMiddleware(...middlewares) {
                return createStore => (...args) => {
                    const store = createStore(...args)
                    let dispatch = () => {
                        throw new Error(
                            `Dispatching while constructing your middleware is not allowed. ` +
                            `Other middleware would not be applied to this dispatch.`
                        )
                    }

                    const middlewareAPI = {
                        getState: store.getState,
                        dispatch: (...args) => dispatch(...args)
                    }
                    const chain = middlewares.map(middleware => middleware(middlewareAPI))
                    dispatch = compose(...chain)(store.dispatch)

                    return {
                        ...store,
                        dispatch
                    }
                }
            }
        ```
1. http://www.redux.org.cn/
2. 源码：https://github.com/reduxjs/re源码：
3. redux-thunk 代码很不错。例子见 react-test/runoob/day101/src/Date.js
    - redux-thunk 的主要思想是扩展 action，使得 action 从一个对象变成一个函数。
    - 缺点：（宝宝还没开始项目开发，还没体会到）
        - action 虽然扩展了，但因此变得复杂，后期可维护性降低；
        - thunks 内部测试逻辑比较困难，需要mock所有的触发函数；
        - 协调并发任务比较困难，当自己的 action 调用了别人的 action，别人的 action 发生改动，则需要自己主动修改；
        - 业务逻辑会散布在不同的地方：启动的模块，组件以及thunks内部。
4. react-redux: 
    - [教程](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html) 
    - [github](https://github.com/reduxjs/react-redux/tree/master/src)
    - 例子：react-test/runoob/day101/src/Date.js
    - 使用React-Router的项目，与其他项目没有不同之处，也是使用Provider在Router外面包一层，毕竟Provider的唯一功能就是传入store对象。

# redux-saga 建议从7开始看，看到结束再返回来看1-6
1. [教程链接一](https://www.jianshu.com/p/6f96bdaaea22)
2. [github 链接](https://github.com/redux-saga/redux-saga)
3. [github 链接中文](https://github.com/superRaytin/redux-saga-in-chinese)
3. [redux-thunk 和 redux-saga 对比](https://segmentfault.com/a/1190000009928167)Redux Saga适用于对事件操作有细粒度需求的场景，同时他们也提供了更好的可测试性。
4. [yield](https://blog.csdn.net/qq_16234613/article/details/52495711)
5. [教程链接二](https://redux-saga-in-chinese.js.org/docs/introduction/BeginnerTutorial.html)
6. [教程链接三](https://segmentfault.com/a/1190000010205210)
7. redux-saga 看了很久，一方面是因为 Generator 不会，另一方面找不到一个小的例子，只看专业解释看不太懂，只有用小例子自己理解了才能看懂专业解释。也是因为跳过了 redux-thunk，导致更困难。所以到此又重新回去认真看了redux-thunk，再回头看这个，感觉轻松了一点。
8. [这篇第一句话听懂了，哈哈哈! 看不懂的地方可配合 5 的API思考](httsps://www.jianshu.com/p/e84493c7af35)
9. 再次强调：纯函数是指一个函数的返回结果只依赖于它的参数，并且在执行过程中不会对外部再次强调：
10. 副作用的定义：但是在实际的应用开发中，我们希望做一些异步的（如Ajax请求）且不纯粹的操作（如改变外部的状态），这些在函数式编程范式中被称副作用的定义：
11. redux-saga 的作用：redux-saga 就是用来处理上述副作用（异步任务）的一个中间件。它是一个接收事件，并可能触发新事件的过程管理者，为你的应用管理复杂的作用：
12. redux-saga 将异步任务进行了集中处理，且方便测试。
13. sagas 自身不真正执行副作用（如函数 call），但是会构造一个需要执行作用的描述。中间件会执行该副作用并把结果返回给 generator 函数。
14. 例子：react-test/runoob/day101/src/sagas/*

# react-router
1. https://www.jianshu.com/p/bf6b45ce5bcc
2. 

# dva
1. https://github.com/dvajs/dva
2. https://github.com/dvajs/dva/blob/master/README_zh-CN.md

# 待看
1. https://www.cnblogs.com/demodashi/p/8476741.html
2. https://github.com/ReactTraining/react-router
3. http://elm-lang.org/blog/farewell-to-frp
4. mobx: https://github.com/mobxjs/mobx
5. rxjs
6. 

