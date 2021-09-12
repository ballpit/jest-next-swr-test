import useSWR from 'swr'


const fetcher = (...args) => fetch(...args).then(res => res.json())

export function SWRComponent () {
  const { data, error } = useSWR('https://bret.io/feed.json', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  // render data
  return <code style={{ overflow: 'hidden' }}>{JSON.stringify(data, null, '  ')}</code>
}
