import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../ForAllComponents/Buttons'
import './test_1.scss'

export default function Test_1() {
  const dispatch = useDispatch()
  const customers = useSelector(state => state.customers.customers)

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch({ type: 'ADD_CUSTOMER', payload: customer })
  }

  return (
    <div className='test1'>
      <Button className='increment' onClick={() => addCustomer('name of man')} title='Додати запис' />
      {customers.length > 0 ?
        <div>
          {customers.map(customer => {
            <h4>{customer.name}</h4>
          })}
        </div>
        :
        <h1>Записи відсутні</h1>
      }
    </div>
  )
}





























// import { useDispatch, useSelector } from 'react-redux'
// import { Button } from '../ForAllComponents/Buttons'
// import './test_1.scss'

// export default function Test_1() {
//   const dispatch = useDispatch()
//   // const cash = useSelector(state => state.cash.cash)
//   const customers = useSelector(state => state.customers.customers)

//   // const addCash = (cash) => {
//   //   dispatch({ type: 'ADD_CASH', payload: cash })
//   // }

//   // const plusCash = () => {
//   //   dispatch({ type: 'ADD_CASH', payload: 5 })
//   // }

//   // const getCash = (cash) => {
//   //   dispatch({ type: 'GET_CASH', payload: cash })
//   // }

//   // const getClear = () => {
//   //   dispatch({ type: 'GET_CLEAR' })
//   // }

//   const addCustomer = (name) => {
//     const customer = {
//       name,
//       id: Date.now()
//     }
//     dispatch({ type: 'ADD_CUSTOMER', payload: customer })
//   }

//   return (
//     <div className='test1'>
//       {/* <div className='container'>
//         <p>{cash}</p>
//         <div className='test1__buttons'>
//           <Button className='increment' onClick={() => addCash(parseInt(prompt()))} title='Add' />
//           <Button className='decrement' onClick={() => getCash(parseInt(prompt()))} title='Minus' />
//           <Button className='multiply' onClick={() => plusCash()} title='plus (+5)' />
//           {cash !== 0 ? <Button className='zero' onClick={() => getClear()} title='Clear' /> : <></>}
//         </div>
//       </div> */}
//       <Button className='increment' onClick={() => addCustomer('name of man')} title='Додати запис' />
//       {/* <Button className='decrement' onClick={() => getCash(parseInt(prompt()))} title='Видалити запис' /> */}
//       {customers.length > 0 ?
//         <div>
//           {customers.map(customer => {
//             <h4>{customer.name}</h4>
//           })}
//         </div>
//         :
//         <h1>Записи відсутні</h1>
//       }
//     </div>
//   )
// }
