import React from 'react';
import { companyReviews, reviews } from '../mock/data';

const Reviews = ({ userType }) => {
      const isEmployer = userType === "employer";
      const reviewsData = isEmployer ? companyReviews : reviews;

      const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
          stars.push(
            <span key={i} className={`text-2xl ${i <= rating ? "text-yellow-400" : "text-gray-300"}`}>
              &#9733;
            </span>
          );
        }
        return stars;
      };

      return (
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-primary">
            {isEmployer ? "Reseñas de la Empresa" : "Reseñas que he recibido"}
          </h2>
          <div className="space-y-4">
            {reviewsData.map((review) => (
              <div key={review.id} className="py-4 border-b last:border-b-0">
                <div className="flex items-center mb-2">
                  <div className="flex mr-2">{renderStars(review.rating)}</div>
                  <span className="font-bold text-gray-800">{review.author}</span>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };

export default Reviews;
