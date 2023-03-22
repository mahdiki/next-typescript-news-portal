import { useRouter } from "next/router";
const Article = () => {
    const router = useRouter()
    console.log(router.query.article)
    return (
        <p>{router.query.article}</p>
    )
}
export default Article