import React from 'react'

export default class extends React.Component {
  render() {
    var { items } = this.props

    return <div>
      { items.map(item =>
        <div>
          { item.feed.title }<br />
          { item.title } <br />
          <a href={ item.enclosure.link } download>Download</a>
        </div>
      ) }
	  </div>
  }
}
