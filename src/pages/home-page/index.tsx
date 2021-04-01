import React, { Component } from 'react'
import { Divider } from 'antd';

export default class HomePage
  extends Component {
  render() {
    return (
      <div className="py-10">
        <div className="">
          <header>
            <div className="info">
              <span className="text-4xl">张柯</span>
              <span className="px-2">个人简历</span>
              <span className="block pt-2">男 | 24 | 前端开发工程师</span>
            </div>
            <div className="contact block pt-2 text-right">
              <div className="phone">
                <span className="text-base">☎ 183-3993-9706</span>
              </div>
              <div className="email">
                <span className="email block">✉ 413365742@qq.com</span>
              </div>
            </div>
          </header>
          <article>
            <div className="education mt-8">
              <span className="icon text-xl">🎓 毕业院校</span>
              <Divider className='mt-1 bg-black' style={{ height: '1px' }} />
              <div className="edu-detail">
                <div className="edu-lasted mt-2 flex justify-between">
                  <span className="font-medium">华中科技大学 &emsp;武汉</span>
                  <span className="font-medium">2018 – 2020</span>
                </div>
                <span className="text-sm">电子信息与通信学院 &emsp;硕士研究生</span>
              </div>
            </div>
            <div className="skill mt-8">
              <span className="icon text-xl">⚙️ 技能</span>
              <Divider className='mt-1 bg-black' style={{ height: '1px' }} />
              <div className="skill-detail mt-2 pl-2 text-sm">
                <li className="inline-block font-semibold">◾&ensp;编程语言:&emsp;</li>
                <span className="inline-block">Javascript, React, Java</span>
              </div>
              <div className="skill-detail mt-2 pl-2 text-sm">
                <li className="inline-block font-semibold">◾&ensp;英文:&emsp;</li>
                <span className="inline-block">CET-6, 日常英语听说</span>
              </div>
              <div className="skill-detail mt-2 pl-2 text-sm">
                <li className="inline-block font-semibold">◾&ensp;知识体系:&emsp;</li>
                <span className="inline-block">熟悉常用的数据结构和算法，熟悉React开发，后端三层架构，了解DDD/BFF</span>
              </div>
            </div>
            <div className="experience mt-8">
              <span className="text-xl">📝 工作经历</span>
              <Divider className='mt-1 bg-black' style={{ height: '1px' }} />
              <div className="experience-lasted mt-2 flex justify-between">
                <span className="font-medium">ThoughtWorks</span>
                <span className="font-medium">2020.10 – 2021.3</span>
              </div>
              <div className="experience-detail text-sm pt-2">
                <span className="text-sm font-medium">工作项目：</span>
                <span className="font-semibold">Melco DCT team</span>
              </div>
              <div className="experience-detail text-sm pt-1">
                <span>项目概况：</span>
                <span className="inline-block pl-16 ml-1">
                  ◾&ensp;该项目为澳门Melco公司所有，DCT team 在开发过程中，还需要与Melco内部，欧洲，等多个vender一起合作开发。
                  <br />
                  ◾&ensp;DCT team负责Melco后台Portal的业务开发，包括：Melco APP消息推送与后台管理，积分兑换与后台管理，
                  优惠券发放与后台管理，Redemption优惠券核销APP开发与后台管理等。
                  <br />
                  ◾&ensp;由于项目涉及多个微服务，所以使用BFF进行管理，为前端提供定制化数据；在每个微服务中使用DDD和六边形架构进行开发；
                  同时使用Kubernetes进行服务部署与监控；使用CI/CD持续集成和持续交付。
                </span>
              </div>
              <div className="experience-detail text-sm pt-1">
                <span className="text-sm font-medium">工作职责：</span>
                <br />
                <span>&emsp;&emsp;&emsp;&emsp;&emsp;◾&ensp;Web前端开发：页面跳转，页面开发，公共组件抽取</span>
                <br />
                <span>&emsp;&emsp;&emsp;&emsp;&emsp;◾&ensp;后端开发：数据库的增改删查，配合前端获取相应数据</span>
                <br />
                <span>&emsp;&emsp;&emsp;&emsp;&emsp;◾&ensp;IOS APP 开发：页面跳转与警告窗弹出</span>
                <br />
                <span>&emsp;&emsp;&emsp;&emsp;&emsp;◾&ensp;团队工作：Showcase owner, Release owner, Session 分享</span>
              </div>
              <div className="experience-detail text-sm pt-1">
                <span className="text-sm font-medium">技术框架：</span>
                <br />
                <span>&emsp;&emsp;&emsp;&emsp;&emsp;◾&ensp;前端：React, Redux, React Router, Webpack, Lodash, Antd, Enzyme, Jest</span>
                <br />
                <span>&emsp;&emsp;&emsp;&emsp;&emsp;◾&ensp;后端：Java, Kotlin, Junit, Spring task, Docker</span>
                <br />
                <span>&emsp;&emsp;&emsp;&emsp;&emsp;◾&ensp;IOS APP：React Native</span>
              </div>
            </div>
          </article>
          <footer className="evaluate mt-8 pb-10">
            <span className="icon text-xl">&ensp;ℹ &ensp;自我评价</span>
            <Divider className='mt-1 bg-black' style={{ height: '1px' }} />
            <span className="evaluate-detail text-sm">&emsp;◾&ensp;对技术有自己的热情，乐于分享</span>
            <br />
            <span className="evaluate-detail text-sm">&emsp;◾&ensp;有自我驱动力，乐观向上，有抗压能力</span>
            <br />
            <span className="evaluate-detail text-sm">&emsp;◾&ensp;热爱运动：羽毛球、乒乓球</span>
          </footer>
        </div>

      </div>
    )
  }
}
