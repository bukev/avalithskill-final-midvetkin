import { useParams } from "react-router-dom"


function EditMovie() {
    const { id } = useParams()


    return(
        <h1>EditMovie {id}</h1>
    )
}

export default EditMovie