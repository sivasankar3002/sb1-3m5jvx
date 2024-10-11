import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Clock, ThumbsUp, ThumbsDown, MessageCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const ReviewPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock data - replace with actual API call in a real application
  const review = {
    title: "Inception",
    director: "Christopher Nolan",
    releaseDate: "2010-07-16",
    rating: 9.5,
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
# Inception: A Mind-Bending Masterpiece

## Introduction

Christopher Nolan's "Inception" is a tour de force of imagination and technical prowess that pushes the boundaries of what's possible in cinema. This 2010 science fiction thriller takes viewers on a journey through the labyrinthine depths of the human mind, blurring the lines between reality and dreams.

## Plot Overview

The film follows Dom Cobb (Leonardo DiCaprio), a skilled thief with the rare ability to "extract" information from people's minds while they're dreaming. Cobb is offered a chance to regain his old life as payment for a task considered to be impossible: "inception", the implantation of another person's idea into a target's subconscious.

## Visual Spectacle

Nolan's direction, coupled with Wally Pfister's cinematography, creates a visually stunning world that seamlessly blends reality with the surreal landscapes of dreams. The film's practical effects, including the iconic rotating hallway scene, are a testament to Nolan's commitment to in-camera techniques.

## Performances

The ensemble cast delivers stellar performances across the board. Leonardo DiCaprio brings depth and vulnerability to Cobb, while supporting actors like Joseph Gordon-Levitt, Ellen Page, and Tom Hardy each bring unique elements to their roles.

## Themes and Symbolism

"Inception" explores complex themes of reality, memory, and the power of ideas. The film's layered narrative structure mirrors the dream-within-a-dream concept, inviting multiple interpretations and repeated viewings.

## Sound and Score

Hans Zimmer's score is a character in itself, with the haunting "Time" theme becoming instantly iconic. The use of Édith Piaf's "Non, je ne regrette rien" as a plot device is particularly clever.

## Conclusion

"Inception" is a rare blockbuster that combines intellectual depth with spectacular action. It challenges viewers to question the nature of reality and the power of the subconscious mind. While some may find the plot complex, the film rewards attentive viewing and stands as a landmark achievement in modern cinema.

**Final Verdict:** A must-see film that redefines the possibilities of the science fiction genre. "Inception" is a dream that you won't want to wake up from.
    `,
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page", "Tom Hardy", "Ken Watanabe"],
    genres: ["Science Fiction", "Action", "Thriller"],
  };

  return (
    <div className="container mx-auto px-4 py-8 animate-fadeIn">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <img src={review.poster} alt={review.title} className="w-full rounded-lg shadow-lg" />
          <div className="mt-4 bg-white rounded-lg shadow p-4">
            <h3 className="font-bold text-lg mb-2">Movie Details</h3>
            <p><strong>Director:</strong> {review.director}</p>
            <p><strong>Release Date:</strong> {review.releaseDate}</p>
            <p><strong>Genre:</strong> {review.genres.join(', ')}</p>
            <h4 className="font-bold mt-4 mb-2">Cast</h4>
            <ul className="list-disc list-inside">
              {review.cast.map((actor, index) => (
                <li key={index}>{actor}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">{review.title}</h1>
          <div className="flex items-center mb-4">
            <Star className="text-yellow-400 mr-1" />
            <span className="font-bold text-xl">{review.rating}/10</span>
          </div>
          <div className="prose max-w-none">
            <ReactMarkdown>{review.content}</ReactMarkdown>
          </div>
          <div className="mt-8 flex items-center space-x-4">
            <button className="btn btn-primary flex items-center">
              <ThumbsUp className="mr-2" /> Like
            </button>
            <button className="btn bg-red-500 text-white hover:bg-red-600 flex items-center">
              <ThumbsDown className="mr-2" /> Dislike
            </button>
            <button className="btn bg-gray-200 text-gray-800 hover:bg-gray-300 flex items-center">
              <MessageCircle className="mr-2" /> Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;