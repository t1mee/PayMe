import Head from 'next/head'

export default function Home() {
  
  const addCard = async () => fetch('http://localhost:8080/api', {
    method: "POST", headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ name: 'Zildjian' })}).then(response => response.json())
    .then(json => console.log(json))


  return (
    <div>
      <Head>
        <title>Pay Me</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main >
        <button onClick={addCard}>send</button>
      </main>
    </div>
  )
}