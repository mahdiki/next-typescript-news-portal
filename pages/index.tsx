import Link from "next/link"

const Home = ({ news }: any) => {
  const article = news.articles
  console.log(article)
  return <div className='grid grid-cols-3 gap-y-8'>

    {article.map((article: any) => {
      return (
        <Link href={article.title.slice(0, 10)}>
          <div className='w-[400px] rounded-md border p-2'>
            {article.urlToImage ?
              <img className='h-[200px] w-full' src={article.urlToImage} alt="" />
              :
              <p className='h-[200px] text-center font-bold'>Image Not Found</p>
            }
            <h4 className="text-xl">Author: {article.author ? article.author : 'NOT FOUND'}</h4>
            {/* <h5>content:{article.content}</h5>
          <p>description:{article.description}</p>
          <p>source:{article.source.name}</p> */}
            <p>{article.title}</p>
            {/* <a href={article.url}>URL</a> */}
          </div>
        </Link>
      )
    })}
  </div>
}

export const getStaticProps = async () => {
  const data = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-02-22&sortBy=publishedAt&apiKey=d7994c59ff9d42468d76dde80ffe63c0")
  const news = await data.json()
  return {
    props: { news }
  }
}

export default Home