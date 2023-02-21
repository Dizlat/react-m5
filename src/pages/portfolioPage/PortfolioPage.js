import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export default function PortfolioPage(props) {
    const navigate = useNavigate()

    const [ photos, setPhotos ] = useState([])
    const [ update, setUpdate ] = useState(false)
    const [ photo, setPhoto ] = useState({})

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(photos => setPhotos(photos))
    }, [ update ])

// находим фото по id 
    const getPhotoId = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then(res => res.json())
            .then(photo => setPhoto(photo))
    }


    return (
        <div >
            <button onClick={() => navigate(-1)}>Go to back</button>
            <h1>Portfolio Page</h1>
            <button onClick={() => setUpdate(!update)}>update</button>

            <div style={{display: "flex"}}>
                <div>
                    {photos.slice(0, 10).map(photo => 
                    <div >
                        <img src={photo.url} alt='' style={{width: '200px'}}/>
                        <p>{photo.title}</p>
                        <button onClick={() => getPhotoId(photo.id)}>Узнать url фото</button>
                        <p>---------------------------------------</p>

                    </div>)}

                </div>
                <h2>
                    url фото: {photo.url}
                </h2>
            </div>
            

        </div>

    )
}