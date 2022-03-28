import { LoaderFunction, useLoaderData } from 'remix'

export const loader: LoaderFunction = async () => {
  const sampleData = [
    { id: 1, name: 'One', description: 'Item One' },
    { id: 2, name: 'Two', description: 'Item Two' },
    { id: 3, name: 'Three', description: 'Item Three' },
    { id: 4, name: 'Four', description: 'Item Four' },
  ]
  return { data: sampleData }
}

export default function () {
  const { data } = useLoaderData()
  return (
    <div>
      <h1>Sample Page</h1>
      <ul>
        {data.map((d: any) => (
          <li key={d.id}>
            {d.name} - {d.description}
          </li>
        ))}
      </ul>
    </div>
  )
}
