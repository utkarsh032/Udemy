import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import axios from 'axios'
const newUrl = 'hhttps://udemy-k17u.onrender.com/course';

export default function CourseGetCourse() {
  const { id } = useParams()
  const [getCourse, setGetCourse] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  console.log(`course id : ${id}`)

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        // const response = await axios.get(`${newUrl}/${id}`);
        const response = await axios.get(newUrl)
        setGetCourse(response.data)
        console.log(response.data)
        setIsLoading(false)
      } catch (error) {
        setError('Failed to fetch course details');
        setIsLoading(false);
      }
    }
    fetchCourse()
  }, [id])

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>{id}</div>
  )
}
