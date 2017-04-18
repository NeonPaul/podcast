export const add = feed => ({
  type: add,
  feed
})

const rss2json = url =>
  'https://api.rss2json.com/v1/api.json?rss_url=' +
    encodeURIComponent(url)

export const resolveFeed = url =>
  dispatch => {
    fetch(rss2json(url))
      .then(response => response.json())
      .then(json => dispatch(add(Object.assign(json.feed, { items: json.items }))))
  }
