import React from 'react'

import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <hr style={{ margin: '15px 0'}} />
      <MyInput
        value={filter.query}
        onChange={ e => setFilter(
          {...filter, query: e.target.value} 
          ) }
        placeholder="caut..."
        />
      <MySelect 
        value={filter.sort}
        onChange={selectedSort => setFilter(
          {...filter, sort: selectedSort}
        )}
        defVal="sortez"
        options={[
        {value: 'title', name: 'nume'},
        {value: 'body', name: 'text'}
        ]}
        />
    </div>
  )
}

export default PostFilter