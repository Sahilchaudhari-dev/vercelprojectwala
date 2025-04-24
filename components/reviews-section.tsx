"use client"

import { useEffect, useState, type FormEvent } from "react"

interface Review {
  name: string
  course: string
  rating: number
  review: string
  initial: string
  bgColor: string
  textColor: string
  date?: string
}

export default function ReviewsSection() {
  const [currentRating, setCurrentRating] = useState(0)

  const defaultReviews: Review[] = [
    {
      name: "Raj P.",
      course: "B.Tech CSE, AI Chatbot Project",
      rating: 5,
      review:
        "Excellent support throughout the project. The documentation was top-notch and helped me understand every detail of implementation.",
      initial: "R",
      bgColor: "bg-blue-200",
      textColor: "text-primary",
    },
    {
      name: "Priya M.",
      course: "Diploma ECE, IoT Project",
      rating: 5,
      review:
        "Very professional service. The team helped me understand every aspect of my project and guided me throughout the viva preparation.",
      initial: "P",
      bgColor: "bg-purple-200",
      textColor: "text-purple-500",
    },
    {
      name: "Sanjay K.",
      course: "BCA, Web Application Project",
      rating: 4.5,
      review:
        "The project was delivered on time and they were always available to answer my questions. My professor was impressed with the work.",
      initial: "S",
      bgColor: "bg-green-200",
      textColor: "text-green-500",
    },
  ]

  useEffect(() => {
    displayReviews()
  }, [])

  const displayReviews = () => {
    const reviewsContainer = document.getElementById("reviewsContainer")
    if (!reviewsContainer) return

    reviewsContainer.innerHTML = ""

    // Get reviews from localStorage or use default ones
    let allReviews: Review[] = []
    const savedReviews = localStorage.getItem("projectReviews")

    if (savedReviews) {
      allReviews = [...JSON.parse(savedReviews), ...defaultReviews]
    } else {
      allReviews = [...defaultReviews]
    }

    // Display up to 6 most recent reviews
    const recentReviews = allReviews.slice(-6)

    recentReviews.forEach((review) => {
      const stars = generateStarRating(review.rating)

      const reviewEl = document.createElement("div")
      reviewEl.className = "clay p-8 transform hover:scale-105 transition-all duration-300"
      reviewEl.innerHTML = `
        <div class="flex items-center mb-5">
          <div class="text-yellow-400 flex text-xl">
            ${stars}
          </div>
        </div>
        <p class="text-gray-600 italic mb-6">"${review.review}"</p>
        <div class="flex items-center">
          <div class="w-12 h-12 rounded-full ${review.bgColor || "clay"} flex items-center justify-center ${review.textColor} font-bold mr-4 text-lg">${review.initial}</div>
          <div>
            <p class="font-semibold">${review.name}</p>
            <p class="text-gray-500 text-sm">${review.course}</p>
          </div>
        </div>
      `
      reviewsContainer.appendChild(reviewEl)
    })
  }

  const generateStarRating = (rating: number) => {
    let stars = ""
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars += '<i class="bi bi-star-fill mr-1"></i>'
    }

    if (hasHalfStar) {
      stars += '<i class="bi bi-star-half mr-1"></i>'
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
    for (let i = 0; i < emptyStars; i++) {
      stars += '<i class="bi bi-star mr-1"></i>'
    }

    return stars
  }

  const handleStarClick = (rating: number) => {
    setCurrentRating(rating)
    const ratingValueInput = document.getElementById("ratingValue") as HTMLInputElement
    if (ratingValueInput) {
      ratingValueInput.value = rating.toString()
    }
    highlightStars(rating)
  }

  const handleStarHover = (rating: number) => {
    highlightStars(rating)
  }

  const handleStarLeave = () => {
    highlightStars(currentRating)
  }

  const highlightStars = (count: number) => {
    const stars = document.querySelectorAll("#ratingStars .bi")
    stars.forEach((s, index) => {
      if (index < count) {
        s.classList.remove("bi-star")
        s.classList.add("bi-star-fill")
        s.classList.add("text-yellow-400")
      } else {
        s.classList.remove("bi-star-fill")
        s.classList.remove("text-yellow-400")
        s.classList.add("bi-star")
      }
    })
  }

  const handleReviewSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const rating = Number.parseFloat(formData.get("rating") as string)

    if (rating === 0) {
      alert("Please select a rating")
      return
    }

    // Get existing reviews or create empty array
    let savedReviews: Review[] = []
    const existingReviews = localStorage.getItem("projectReviews")
    if (existingReviews) {
      savedReviews = JSON.parse(existingReviews)
    }

    // Generate color classes
    const colorOptions = [
      { bg: "bg-blue-200", text: "text-primary" },
      { bg: "bg-green-200", text: "text-green-500" },
      { bg: "bg-purple-200", text: "text-purple-500" },
      { bg: "bg-pink-200", text: "text-pink-500" },
      { bg: "bg-yellow-200", text: "text-yellow-600" },
    ]

    const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)]

    // Create new review
    const newReview: Review = {
      name: formData.get("name") as string,
      course: formData.get("course") as string,
      rating: rating,
      review: formData.get("review") as string,
      initial: (formData.get("name") as string).charAt(0).toUpperCase(),
      bgColor: randomColor.bg,
      textColor: randomColor.text,
      date: new Date().toISOString(),
    }

    // Add to saved reviews
    savedReviews.push(newReview)
    localStorage.setItem("projectReviews", JSON.stringify(savedReviews))

    // Update display
    displayReviews()

    // Reset form
    e.currentTarget.reset()
    setCurrentRating(0)
    highlightStars(0)

    alert("Thank you for your review! It has been posted successfully.")
  }

  return (
    <section id="reviews" className="py-20 px-4 bg-blue-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center text-primary">Student Reviews</h2>
        <p className="text-center text-gray-600 mb-12">See what our students have to say about our services</p>
        <div id="reviewsContainer" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Reviews will be loaded here */}
        </div>

        {/* Submit a Review Form */}
        <div className="mt-20 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Submit Your Review</h3>
          <form className="clay p-10" id="reviewForm" onSubmit={handleReviewSubmit}>
            <div className="mb-6">
              <label className="block mb-3 text-gray-700 font-medium">Your Name</label>
              <input type="text" name="name" placeholder="Enter your name" className="clay-input w-full p-4" required />
            </div>
            <div className="mb-6">
              <label className="block mb-3 text-gray-700 font-medium">Course & Project Title</label>
              <input
                type="text"
                name="course"
                placeholder="e.g., B.Tech CSE, AI Chatbot"
                className="clay-input w-full p-4"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-3 text-gray-700 font-medium">Your Rating</label>
              <div className="flex text-3xl text-gray-400" id="ratingStars">
                <i
                  className="bi bi-star cursor-pointer hover:text-yellow-400 px-1"
                  data-rating="1"
                  onClick={() => handleStarClick(1)}
                  onMouseOver={() => handleStarHover(1)}
                  onMouseOut={handleStarLeave}
                ></i>
                <i
                  className="bi bi-star cursor-pointer hover:text-yellow-400 px-1"
                  data-rating="2"
                  onClick={() => handleStarClick(2)}
                  onMouseOver={() => handleStarHover(2)}
                  onMouseOut={handleStarLeave}
                ></i>
                <i
                  className="bi bi-star cursor-pointer hover:text-yellow-400 px-1"
                  data-rating="3"
                  onClick={() => handleStarClick(3)}
                  onMouseOver={() => handleStarHover(3)}
                  onMouseOut={handleStarLeave}
                ></i>
                <i
                  className="bi bi-star cursor-pointer hover:text-yellow-400 px-1"
                  data-rating="4"
                  onClick={() => handleStarClick(4)}
                  onMouseOver={() => handleStarHover(4)}
                  onMouseOut={handleStarLeave}
                ></i>
                <i
                  className="bi bi-star cursor-pointer hover:text-yellow-400 px-1"
                  data-rating="5"
                  onClick={() => handleStarClick(5)}
                  onMouseOver={() => handleStarHover(5)}
                  onMouseOut={handleStarLeave}
                ></i>
              </div>
              <input type="hidden" name="rating" id="ratingValue" value="0" required />
            </div>
            <div className="mb-8">
              <label className="block mb-3 text-gray-700 font-medium">Your Review</label>
              <textarea
                name="review"
                placeholder="Share your experience"
                rows={4}
                className="clay-input w-full p-4"
                required
              ></textarea>
            </div>
            <button type="submit" className="clay-button w-full py-4 text-lg font-medium">
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
