import Component from '../components/items'
import { connect } from 'react-redux'

const mapStateToProps = state => ({ items:state.feeds.list.reduce(
  (items, feed) => items.concat(feed.items.map(
    item => Object.assign(item, { feed }))
  ),
  []
).sort((a, b) => (new Date(b.pubDate) - new Date(a.pubDate)))
})

export default connect(
  mapStateToProps
)(Component)
