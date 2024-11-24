import React, { useState } from "react";

const Resenias = ({ onClose }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [showMore, setShowMore] = useState(false);

  const handleRating = (rate) => {
    if (rate >= 1 && rate <= 5) {
      setRating(rate);
    }
  };

  const handleSubmit = () => {
    if (rating > 0 && reviewText.trim()) {
      setReviews([...reviews, { rating, text: reviewText }]);
      setRating(0);
      setReviewText("");
    } else {
      alert("Por favor, selecciona una calificación válida y escribe una reseña.");
    }
  };

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
      : 0;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#ecc22d] shadow-lg rounded-md p-6 max-w-4xl w-full sm:w-11/12 md:w-9/12 lg:w-7/12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Reseñas</h2>
          <button
            onClick={onClose} 
            className="text-xl font-bold text-[#002E40] hover:text-[#f24c49]"
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>
        
        {/* Reseña general y calificación promedio */}
        <div className="flex space-x-8 mb-6">
          <div className="bg-[#f4f4b3] p-4 rounded-md flex-1 shadow-md">
            <h3 className="text-lg font-semibold mb-3 text-[#002E40]">Calificación Promedio:</h3>
            <div className="flex items-center space-x-1">
              {Array.from({ length: 5 }, (_, index) => (
                <span key={index} className="text-[#efc51b] text-2xl">
                  {index < Math.round(averageRating) ? "★" : "☆"}
                </span>
              ))}
            </div>
            <p className="text-sm text-[#002E40] mt-2">
              {reviews.length > 0
                ? `Basado en ${reviews.length} reseña(s).`
                : "Sé el primero en calificar este producto."}
            </p>
          </div>

          {/* Calificación y texto de reseña */}
          <div className="bg-[#f4f4b3] p-4 rounded-md flex-1 shadow-md">
            <h3 className="text-lg font-semibold mb-3 text-[#002E40]">Calificar:</h3>
            <div className="flex items-center space-x-1 mb-4">
              {Array.from({ length: 5 }, (_, index) => (
                <span
                  key={index}
                  className={`text-3xl cursor-pointer ${
                    (hoverRating || rating) > index
                      ? "text-[#f5d20e]"
                      : "text-[#ffffff]"
                  }`}
                  onClick={() => handleRating(index + 1)}
                  onMouseEnter={() => setHoverRating(index + 1)}
                  onMouseLeave={() => setHoverRating(0)}
                  aria-label={`Calificación ${index + 1}`}
                >
                  ★
                </span>
              ))}
            </div>
            <textarea
              className="w-full border rounded-md p-3 focus:ring focus:ring-[#f4e543] focus:border-[#F24C49]"
              rows="3"
              placeholder="Escribe tu reseña aquí..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            ></textarea>
            <button
              className={`mt-4 px-5 py-2 rounded-md text-white font-semibold ${
                rating > 0 && reviewText.trim()
                  ? "bg-[#24ce49d7] hover:bg-[#5049489a]"
                  : "bg-[#db4949] cursor-not-allowed"
              }`}
              onClick={handleSubmit}
              disabled={!(rating > 0 && reviewText.trim())}
            >
              Enviar reseña
            </button>
          </div>
        </div>

        {/* Listado de Reseñas */}
        <div className="bg-[#f4f4b3] p-6 rounded-md">
          <h3 className="text-lg font-semibold mb-3 text-[#002E40]">Reseñas:</h3>
          {reviews.length > 0 ? (
            <div>
              {reviews.slice(0, showMore ? reviews.length : 3).map((review, index) => (
                <div key={index} className="border-b border-[#F2EAC2] py-3 text-[#002E40]">
                  <div className="flex items-center space-x-1 mb-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span
                        key={i}
                        className={`text-lg ${
                          review.rating > i ? "text-[#f3d038]" : "text-[#ffffff]"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-sm">{review.text}</p>
                </div>
              ))}
              {!showMore && reviews.length > 3 && (
                <button
                  onClick={() => setShowMore(true)}
                  className="text-[#1b1141] font-semibold mt-2"
                >
                  Ver más...
                </button>
              )}
              {showMore && reviews.length > 3 && (
                <button
                  onClick={() => setShowMore(false)}
                  className="text-[#4a46468b] font-semibold mt-2"
                >
                  Ver menos...
                </button>
              )}
            </div>
          ) : (
            <p className="text-[#56535354]">No hay reseñas aún.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resenias;
