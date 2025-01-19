import React, { useEffect, useState } from 'react'
import { CartPallete } from '../../UI/Components/cartPallete'
import { Link } from 'react-router-dom'
import { CheckOutCart } from './checkOutCart'

export const CartSection = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch('https://udemy-j08o.onrender.com/course')
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.log(error))
  }, [])
  return (
    <div className='flex justify-between '>
      <div className="w-full m-10">
        <div className="">
          <h1 className="text-4xl font-bold">Shopping Cart</h1>
          <p className=" font-bold py-2">{courses.length} Courses in Cart</p>
        </div>
        {courses.length === 0 ? (
          <p className="text-gray-500">Select <Link to='/'>Courses</Link></p>
        ) : (
          <div className=" border-t-2 border-black">
            {courses.slice(0, 5).map((course, _id) => (
              <CartPallete
                key={course._id}
                _id={course._id}
                title={course.title}
                author={course.instructors}
                rating={course.avgRating}
                reviews={course.ratingCount}
                price={course.salePrice}
                duration={course.duration}
                originalPrice={course.actualPrice}
                imageUrl={course.thumbnail}
                handleAddToCart={_id}
              />
            ))}
          </div>
        )}
      </div>
      <CheckOutCart />
    </div>
  )
}
