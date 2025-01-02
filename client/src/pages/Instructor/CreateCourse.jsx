import { useState } from 'react';

export const CreateCourseForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    subCategory: '',
    actualPrice: 0,
    salePrice: 0,
    duration: '5 hours',
    thumbnail: '',
    uploadLink: '',
    notes: '',
    createdBy: '',
    avgRating: 4.7,
    reviews: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(
      {
        title: '',
        description: '',
        category: '',
        subCategory: '',
        actualPrice: 0,
        salePrice: 0,
        duration: '5 hours',
        thumbnail: '',
        uploadLink: '',
        notes: '',
        createdBy: '',
        avgRating: 4.7,
        reviews: ''
      }
    )
  };

  return (
    <div className="container mx-auto p-6 bg-gray-900 shadow-md border-2 border-gray-800 text-gray-100 rounded-lg">
      <h2 className="text-3xl mb-4">
        Create New <b className="text-[#a855f7]">Course</b>:
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Course Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-300">Course Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 p-2 w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a855f7]"
            required
          />
        </div>

        {/* Course Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-300">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 p-2 w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a855f7]"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Course Category */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-300">Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 p-2 w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a855f7]"
            required
          >
            <option value="Programming">Programming</option>
            <option value="Web Development">Web Development</option>
            <option value="Data Science">Data Science</option>
          </select>
        </div>

        {/* Course SubCategory */}
        <div>
          <label htmlFor="subCategory" className="block text-sm font-medium text-gray-300">SubCategory:</label>
          <select
            id="subCategory"
            name="subCategory"
            value={formData.subCategory}
            onChange={handleChange}
            className="mt-1 p-2 w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a855f7]"
            required
          >
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="HTML/CSS">HTML/CSS</option>
          </select>
        </div>

        {/* Course Price */}
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label htmlFor="actualPrice" className="block text-sm font-medium text-gray-300">Actual Price:</label>
            <input
              type="text"
              id="actualPrice"
              name="actualPrice"
              value={formData.actualPrice}
              onChange={handleChange}
              className="mt-1 p-2 w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a855f7]"
              required
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="salePrice" className="block text-sm font-medium text-gray-300">Sale Price:</label>
            <input
              type="text"
              id="salePrice"
              name="salePrice"
              value={formData.salePrice}
              onChange={handleChange}
              className="mt-1 p-2 w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a855f7]"
              required
            />
          </div>
        </div>

        {/* Course Duration */}
        <div>
          <label htmlFor="duration" className="block text-sm font-medium text-gray-300">Duration:</label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="mt-1 p-2 w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a855f7]"
            required
          />
        </div>

        {/* Course Thumbnail */}
        <div>
          <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-300">Thumbnail URL:</label>
          <input
            type="url"
            id="thumbnail"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleChange}
            className="mt-1 p-2 w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a855f7]"
            required
          />
        </div>

        {/* Course Video URL */}
        <div>
          <label htmlFor="uploadLink" className="block text-sm font-medium text-gray-300">Video URL:</label>
          <input
            type="url"
            id="uploadLink"
            name="uploadLink"
            value={formData.uploadLink}
            onChange={handleChange}
            className="mt-1 p-2 w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a855f7]"
            required
          />
        </div>

        {/* Course Notes */}
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-300">Course Notes:</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="mt-1 p-2 w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a855f7]"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Created By */}
        <div>
          <label htmlFor="createdBy" className="block text-sm font-medium text-gray-300">Created By:</label>
          <input
            type="text"
            id="createdBy"
            name="createdBy"
            value={formData.createdBy}
            onChange={handleChange}
            className="mt-1 p-2 w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a855f7]"
            required
          />
        </div>

        {/* Average Rating */}
        <div>
          <label htmlFor="avgRating" className="block text-sm font-medium text-gray-300">Average Rating:</label>
          <input
            type="number"
            id="avgRating"
            name="avgRating"
            value={formData.avgRating}
            onChange={handleChange}
            min="0"
            max="5"
            className="mt-1 p-2 w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a855f7]"
            required
          />
        </div>

        {/* Reviews */}
        <div>
          <label htmlFor="reviews" className="block text-sm font-medium text-gray-300">Reviews (Comma Separated):</label>
          <input
            type="text"
            id="reviews"
            name="reviews"
            value={formData.reviews}
            onChange={handleChange}
            className="mt-1 p-2 w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a855f7]"
          />
        </div>

        {/* Submit Button */}
        <div className="text-end">
          <button type="submit" className="mt-4 py-2 px-6 bg-[#a855f7] text-white rounded-md hover:bg-purple-700">
            Create Course
          </button>
        </div>
      </form>
    </div>
  );
};


