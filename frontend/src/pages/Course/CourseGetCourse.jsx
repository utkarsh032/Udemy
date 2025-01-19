import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import axios from 'axios'
const newUrl = 'https://udemy-j08o.onrender.com/course';

export default function CourseGetCourse() {
  const { id } = useParams()
  const [getCourse, setGetCourse] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  console.log(id)

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

  return (
    <div>data</div>
  )
}
