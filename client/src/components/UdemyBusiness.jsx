import { Link } from "react-router-dom"

export const UdemyBusiness = () => {
  return (
    <div className="flex items-center justify-between bg-black text-white p-4  rounded-lg  px-8 py-6 mx-16 my-6">
      <div>
        <p><b>Training 2 or more people?</b> Get your team access to Udemy's top 27,000+ courses</p>
      </div>
      <div className="flex gap-4">
        <Link to='/udemy-business/form' className="bg-white text-black px-4 py-2 rounded-md font-bold">Get Udemy Business</Link>
        <button className="border px-4 py-2 rounded-md font-bold">Dismiss</button>
      </div>
    </div>
  )
}
