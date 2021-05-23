import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import { v1 } from "uuid";
import s from '../../p1-main/m1-ui/u1-app/App.module.css';

// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([])

    const addUserCallback = (name: string) => {
       const newUser: UserType = {
          _id: v1(),
          name: name
       }
        setUsers([...users, newUser])
    }

    return (
        <div>
            <hr/>
           <span className={s.hw}>homeworks 3</span>

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
