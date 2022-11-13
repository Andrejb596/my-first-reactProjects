import { Provider } from 'react-redux'
import Test_1 from '../components/Page_11/Test_1'
import './SCSS/page_11.scss'
import { store } from "../components/Page_11/store/index";

export default function Page_11() {
  return (
    <Provider store={store}>
      <div className='page11'>
        <Test_1 />
      </div>
    </Provider>
  )
}
