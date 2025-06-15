import React from "react";
import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "greydev78",
        country: "France",
        rating: 5,
        project: "Full Game Creation",
        price: "Up to $50",
        comment: "Perfect developer.",
    },
    {
        name: "wwazman",
        country: "United States",
        rating: 5,
        project: "Full Game Creation",
        price: "$100–$200",
        comment:
            "Was really patient… we were both able to get my project working exactly as I wanted it. Will definitely recommend and perhaps hire again soon!",
    },
    {
        name: "unernunnou",
        country: "Malta",
        rating: 5,
        project: "Full Game Creation",
        price: "Up to $50",
        comment: "Very good, very nice.",
    },
    {
        name: "elenlimen",
        country: "Philippines",
        rating: 5,
        project: "Website Development",
        price: "Up to $100",
        comment:
            "He is very responsive… delivers his promises much earlier… Highly recommended. Thank you so much!",
    },
    {
        name: "greenkharma",
        country: "United States",
        rating: 5,
        project: "Website Development",
        price: "Up to $150",
        comment:
            "Always delivers quality work on time. Easy to work with, very responsive, and open to feedback. I’ve placed multiple orders with him—he’s my go-to developer. Highly recommended!",
    },
];

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <h2>Client Testimonials</h2>
            <div className="testimonials-grid">
                {testimonials.map((t, index) => (
                    <div className="testimonial-card" key={index}>
                        <div className="testimonial-header">
                            <h4>{t.name}</h4>
                            <p className="country">{t.country}</p>
                            <div className="stars">
                                {[...Array(t.rating)].map((_, i) => (
                                    <FaStar key={i} color="#ffc107" />
                                ))}
                            </div>
                        </div>
                        <p className="comment">“{t.comment}”</p>
                        <div className="testimonial-footer">
                            {t.project && <small>📌 {t.project}</small>}
                            {t.price && <small>💰 {t.price}</small>}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
