import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Share, Bookmark, User, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import DemoControls from '../components/DemoControls';
import '../styles/demo.css';

interface Comment {
  id: number;
  username: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  likes: number;
}

interface Post {
  id: number;
  username: string;
  userAvatar: string;
  image: string;
  caption: string;
  likes: number;
  comments: Comment[];
  timestamp: string;
}

const InstagramDemo: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      username: 'techstartup_co',
      userAvatar: '/lovable-uploads/meonwebsite.png',
      image: '/lovable-uploads/Computer_hand.png',
      caption: 'Just launched our new AI-powered customer service solution! 🚀 What do you think about AI chatbots helping businesses? #AI #CustomerService #Tech',
      likes: 127,
      timestamp: '2 hours ago',
      comments: [
        {
          id: 1,
          username: 'sarah_marketing',
          text: 'This looks amazing! How does it handle complex customer queries?',
          isBot: false,
          timestamp: new Date(Date.now() - 3600000),
          likes: 3
        },
        {
          id: 2,
          username: 'mike_developer',
          text: 'Really impressive work! Is this using GPT or a custom model?',
          isBot: false,
          timestamp: new Date(Date.now() - 3000000),
          likes: 5
        },
        {
          id: 3,
          username: 'business_solutions_ai',
          text: 'Great question! Our AI can handle complex queries through natural language processing and contextual understanding. It gets smarter with each interaction! 🤖✨',
          isBot: true,
          timestamp: new Date(Date.now() - 2800000),
          likes: 8
        }
      ]
    },
    {
      id: 2,
      username: 'digital_agency_pro',
      userAvatar: '/lovable-uploads/e1b261ac-11fc-46a6-b20a-d6c57514756e.png',
      image: '/lovable-uploads/Blog1small.jpeg',
      caption: 'Behind the scenes of our latest project! Working with AI tools has revolutionized our workflow. Who else is integrating AI into their business? 💡 #DigitalTransformation #AI #Business',
      likes: 89,
      timestamp: '4 hours ago',
      comments: [
        {
          id: 4,
          username: 'anna_consultant',
          text: 'We are considering AI for our client projects. Any recommendations?',
          isBot: false,
          timestamp: new Date(Date.now() - 7200000),
          likes: 2
        },
        {
          id: 5,
          username: 'business_solutions_ai',
          text: 'Absolutely! Start with customer service automation and content generation. These provide immediate ROI and clear value demonstration. Happy to discuss specific use cases! 📈',
          isBot: true,
          timestamp: new Date(Date.now() - 6800000),
          likes: 6
        }
      ]
    }
  ]);

  const [isAutoReplying, setIsAutoReplying] = useState(false);

  const botResponses = [
    "Thanks for your interest! Our AI solutions are designed to integrate seamlessly with existing business processes. Would you like to learn more? 🤖",
    "Great point! AI adoption is accelerating across industries. We help businesses implement AI solutions that drive real results. Let's chat! ⚡",
    "Excellent question! Our platform supports multiple AI models and can be customized for your specific needs. Happy to provide a demo! 🚀",
    "That's exactly what we specialize in! AI-powered automation can reduce response times by 80%. Want to see how it works? 💡",
    "Absolutely! We've helped over 200+ businesses implement AI solutions. Each implementation is tailored to specific industry needs. Interested in a consultation? 📊"
  ];

  const triggerAutoReply = () => {
    setIsAutoReplying(true);
    
    // Simulate adding a new comment that would trigger bot response
    setTimeout(() => {
      const randomPost = posts[Math.floor(Math.random() * posts.length)];
      const newComment: Comment = {
        id: Date.now(),
        username: 'potential_customer',
        text: 'This looks interesting! How can I implement something like this for my business?',
        isBot: false,
        timestamp: new Date(),
        likes: 0
      };

      // Add user comment
      setPosts(prevPosts => 
        prevPosts.map(post => 
          post.id === randomPost.id 
            ? { ...post, comments: [...post.comments, newComment] }
            : post
        )
      );

      // Add bot reply after delay
      setTimeout(() => {
        const botReply: Comment = {
          id: Date.now() + 1,
          username: 'business_solutions_ai',
          text: botResponses[Math.floor(Math.random() * botResponses.length)],
          isBot: true,
          timestamp: new Date(),
          likes: 0
        };

        setPosts(prevPosts => 
          prevPosts.map(post => 
            post.id === randomPost.id 
              ? { ...post, comments: [...post.comments, botReply] }
              : post
          )
        );
        setIsAutoReplying(false);
      }, 2000);
    }, 1000);
  };

  const resetDemo = () => {
    // Reset to original state
    setPosts([
      {
        id: 1,
        username: 'techstartup_co',
        userAvatar: '/lovable-uploads/meonwebsite.png',
        image: '/lovable-uploads/Computer_hand.png',
        caption: 'Just launched our new AI-powered customer service solution! 🚀 What do you think about AI chatbots helping businesses? #AI #CustomerService #Tech',
        likes: 127,
        timestamp: '2 hours ago',
        comments: [
          {
            id: 1,
            username: 'sarah_marketing',
            text: 'This looks amazing! How does it handle complex customer queries?',
            isBot: false,
            timestamp: new Date(Date.now() - 3600000),
            likes: 3
          },
          {
            id: 2,
            username: 'mike_developer',
            text: 'Really impressive work! Is this using GPT or a custom model?',
            isBot: false,
            timestamp: new Date(Date.now() - 3000000),
            likes: 5
          }
        ]
      },
      {
        id: 2,
        username: 'digital_agency_pro',
        userAvatar: '/lovable-uploads/e1b261ac-11fc-46a6-b20a-d6c57514756e.png',
        image: '/lovable-uploads/Blog1small.jpeg',
        caption: 'Behind the scenes of our latest project! Working with AI tools has revolutionized our workflow. Who else is integrating AI into their business? 💡 #DigitalTransformation #AI #Business',
        likes: 89,
        timestamp: '4 hours ago',
        comments: [
          {
            id: 4,
            username: 'anna_consultant',
            text: 'We are considering AI for our client projects. Any recommendations?',
            isBot: false,
            timestamp: new Date(Date.now() - 7200000),
            likes: 2
          }
        ]
      }
    ]);
  };

  return (
    <div className="demo-page min-h-screen bg-gray-50">
      <DemoControls 
        demoType="instagram"
      />

      {/* Instagram Header */}
      <header className="instagram-header text-white py-4 px-6 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">Instagram</div>
          <div className="flex items-center space-x-4">
            <Heart className="h-6 w-6" />
            <MessageCircle className="h-6 w-6" />
            <User className="h-6 w-6" />
          </div>
        </div>
      </header>

      {/* Feed */}
      <main className="max-w-2xl mx-auto py-8 px-4">
        {posts.map((post) => (
          <article key={post.id} className="instagram-post mb-8 overflow-hidden">
            {/* Post Header */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={post.userAvatar} alt={post.username} />
                  <AvatarFallback>{post.username[0].toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-sm">{post.username}</div>
                  <div className="text-gray-500 text-xs">{post.timestamp}</div>
                </div>
              </div>
              <MoreHorizontal className="h-5 w-5 text-gray-600" />
            </div>

            {/* Post Image */}
            <div className="w-full">
              <img 
                src={post.image} 
                alt="Post content"
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Post Actions */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-4">
                <Heart className="h-6 w-6 text-gray-700 hover:text-red-500 cursor-pointer" />
                <MessageCircle className="h-6 w-6 text-gray-700 cursor-pointer" />
                <Share className="h-6 w-6 text-gray-700 cursor-pointer" />
              </div>
              <Bookmark className="h-6 w-6 text-gray-700 cursor-pointer" />
            </div>

            {/* Post Info */}
            <div className="px-4 pb-2">
              <div className="font-semibold text-sm mb-2">{post.likes} likes</div>
              <div className="text-sm">
                <span className="font-semibold mr-2">{post.username}</span>
                {post.caption}
              </div>
            </div>

            {/* Comments */}
            <div className="px-4 pb-4">
              <div className="text-gray-500 text-sm mb-3 cursor-pointer">
                View all {post.comments.length} comments
              </div>
              
              {post.comments.map((comment) => (
                <div key={comment.id} className="mb-2">
                  <div className="flex items-start space-x-2">
                    <span className="font-semibold text-sm">{comment.username}</span>
                    <div className={`instagram-comment px-3 py-1 text-sm flex-1 ${comment.isBot ? 'bot-reply' : ''}`}>
                      {comment.text}
                    </div>
                  </div>
                  {comment.likes > 0 && (
                    <div className="text-xs text-gray-500 ml-2 mt-1">
                      {comment.likes} likes
                    </div>
                  )}
                </div>
              ))}

              {isAutoReplying && (
                <div className="flex items-center space-x-2 mt-2">
                  <span className="font-semibold text-sm">business_solutions_ai</span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <span>typing</span>
                    <div className="typing-dots ml-2">
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </article>
        ))}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2">
        <div className="max-w-2xl mx-auto flex justify-around">
          <div className="p-3">
            <div className="w-6 h-6 bg-gray-300 rounded"></div>
          </div>
          <div className="p-3">
            <div className="w-6 h-6 bg-gray-300 rounded"></div>
          </div>
          <div className="p-3">
            <div className="w-6 h-6 bg-gray-300 rounded"></div>
          </div>
          <div className="p-3">
            <div className="w-6 h-6 bg-gray-300 rounded"></div>
          </div>
          <div className="p-3">
            <div className="w-6 h-6 bg-gray-300 rounded"></div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default InstagramDemo;