import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CourseActions from '../../store/actions/course'

const Sidebar = ({ modules, toggleLeson }) => (
  <aside>
    {modules.map(module => (
      <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
          {module.lessons.map(lesson => (
            <li key={lesson.id}>
              {lesson.title}
              <button onClick={() => toggleLeson(module, lesson)}> Selecionar </button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
)
const mapStateToProps = state => ({
  modules: state.course.modules
})
// const mapDispatchToProps = dispatch => ({
//   toggleLeson: (module, lesson) => dispatch(CourseActions.toggleLeson(module, lesson))
// })
const mapDispatchToProps = dispatch => bindActionCreators(CourseActions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
