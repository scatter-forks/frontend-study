import {Component} from 'react'
import { Image } from 'antd';
import './index.scss'

class Good extends Component {
  render() {
    return (
      <div className='good'>
        <div className='good-picture'>
          <Image
            className='img'
            src="https://pic1.zhimg.com/v2-0577e1adadcc3f2bdb720ad95660ca01_r.jpg?source=1940ef5c"
          />
        </div>
        <div className='good-detail'>
          <div className='good-title text-2xl my-2'>夕阳下的海滩</div>
          <div className='good-advantage'>布满苔藓的石头, 橘红色的天空, 加上夸张的调色, 使得这一切直冲眼球</div>
          <div className='good-price text-red-500 mt-2'>
            ￥
            <span className='text-xl'>999</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Good