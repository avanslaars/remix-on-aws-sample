import { LoaderFunction, useLoaderData } from 'remix'

export const loader: LoaderFunction = async () => {
  // generate an array with 100 elements
  const sampleData = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    name: `Item ${i}`,
  }))

  return { data: sampleData }
}

export default function () {
  const { data } = useLoaderData()
  return (
    <div>
      <h1>Sample Page</h1>
      <ul>
        {data.map((d: any) => (
          <li key={d.id}>{d.name}</li>
        ))}
      </ul>
    </div>
  )
}
