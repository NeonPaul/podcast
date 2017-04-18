import Counter from '../components/feed-input'
import { resolveFeed } from '../store/actions/feeds'
import { connect } from 'react-redux'

const mapStateToProps = state => state.feeds

const mapDispatchToProps = dispatch => ({
  onAdd: feed => dispatch(resolveFeed(feed))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
