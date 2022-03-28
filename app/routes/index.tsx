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
export default function Index() {
  const { data } = useLoaderData()
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h2>Welcome to my Remix app on AWS</h2>
      <h3>Here is loader data</h3>
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
