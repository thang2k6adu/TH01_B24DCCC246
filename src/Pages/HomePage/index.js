import React from 'react'
import Counter from '../../components/Counter/Counter'
import TodoApp from '../../components/Todo/Todo'
import ColorBoxApp from '../../components/ColorBox/ColorBoxApp'
import StudentList from '../../components/StudentList/StudentList'
import Clock from '../../components/Clock/Clock'

export default function index() {
  return (
    <div>
      <Counter/>
      <TodoApp/>
      <ColorBoxApp/>
      <StudentList/>
      <Clock/>
    </div>
  )
}
