import React from 'react'
import faker from 'faker'

import CommentDetail from './CommentDetail'

const Comment = () => {
  return (
    <div className={'ui conteiner comments'}>
      <CommentDetail
        author="Leo Santos"
        timeAgo="Today at 3:43AM"
        content="Its a Nice Blog."
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Sam Jam"
        timeAgo="Today at 7:43AM"
        content="Its a Blog Ok."
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Mark Sin"
        timeAgo="Today at 9:43AM"
        content="Its a Good Blog."
        avatar={faker.image.avatar()}
      />
    </div>
  )
}
export default Comment
