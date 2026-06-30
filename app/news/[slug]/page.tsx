export type Comment = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  message: string;
  timestamp: number;
  rating?: number;
};

export type ArticleWithInteractions = {
  slug: string;
  title: string;
  content: string;
  author: string;
  date: string;
  description?: string;
  label?: string;
};

import { getNewsArticle, getNewsArticles } from '@/lib/news';
import Markdown from 'react-markdown';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Twitter, Facebook, Linkedin, Share2, Mail, Instagram, Youtube, ThumbsUp, ThumbsDown, User as UserIcon, MessageCircle, Send, Smile } from 'lucide-react';
import { useState, useEffect } from 'react';

export async function generateStaticParams() {
  const articles = getNewsArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

function CommentForm({ onAddComment }: { onAddComment: (comment: Comment) => void }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [message, setMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [rating, setRating] = useState(0);
  
  const emojiOptions = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤓', '🧐', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '🥱', '😴', '🤤', '😒', '😓', '😔', '😕', '🙁', '☹️', '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😰', '😥', '😮', '😳', '😵', '😡', '😠', '🤬', '😺', '😸', '😹', '😻', '😼', '😽', '🙈', '🙉', '🙊', '🐵', '🐶', '🐺', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🦝', '🐮', '🐷', '🐗', '🐸', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🦝', '🐲', '🐍', '🐢', '🦎', '🦖', '🦕', '🐉', '🐳', '🐋', '🐬', '🦭', '🐟', '🐠', '🐡', '🦐', '🦀', '🦑', '🦈', '🐙', '🦑', '🐚', '🌸', '💐', '🌷', '🌹', '🥀', '🌺', '🌻', '🌼', '🌱', '🌲', '🌳', '🌴', '🌵', '🌶️', '🌱', '🌲', '🌳', '🌴', '🌵', '🌿', '☘️', '🍀', '🍁', '🍂', '🍃', '🌰', '🍄', '🌪️', '🌈', '☀️', '🌙', '⭐', '🌟', '✨', '⚡', '☔', '❄️', '⛄', '☃️', '🔥', '💧', '🌊', '🌫️', '🌥️', '☀️', '🌤️', '⛅', '🌤️', '🌤️', '⛅', '🌤️', '☀️', '🌙', '🌛', '🌝', '🌕', '🌗', '🌖', '🌒', '🌓', '🌔'];
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    
    const newComment: Comment = {
      id: Date.now().toString(),
      name,
      email,
      avatar: avatar || undefined,
      message,
      timestamp: Date.now(),
      rating: rating || undefined,
    };
    
    onAddComment(newComment);
    setName('');
    setEmail('');
    setAvatar('');
    setMessage('');
    setRating(0);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Nom</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Votre nom"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="email@example.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Avatar/Emoji</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              className="flex-1 px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Ajoutez un emoji ou une URL"
            />
            <button
              type="button"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              className="px-3 py-2 rounded-lg bg-white/40 dark:bg-slate-900/40 border border-slate-300 dark:border-slate-700 hover:bg-orange-50 dark:hover:bg-orange-950/50 transition-colors"
            >
              <Smile className="w-5 h-5" />
            </button>
          </div>
          {showEmojiPicker && (
            <div className="absolute z-50 mt-2 p-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg shadow-lg grid grid-cols-10 gap-2 max-h-64 overflow-y-auto">
              {emojiOptions.map((emoji) => (
                <button
                  key={emoji}
                  type="button"
                  onClick={() => {
                    setAvatar(avatar ? avatar + ' ' + emoji : emoji);
                    setShowEmojiPicker(false);
                  }}
                  className="text-2xl hover:bg-slate-100 dark:hover:bg-slate-800 rounded p-1 transition-colors"
                >
                  {emoji}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Note (optionnel)</label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setRating(value)}
              className={`w-10 h-10 rounded-full border-2 transition-colors ${value <= rating ? 'bg-orange-500 border-orange-500 text-white' : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 hover:bg-orange-50 dark:hover:bg-orange-950/50'}`}>
              {value}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Commentaire</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
          placeholder="Partagez votre avis..."
          required
        />
      </div>
      
      <button
        type="submit"
        className="px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-medium transition-colors flex items-center gap-2"
      >
        <Send className="w-5 h-5" />
        Publier le commentaire
      </button>
    </form>
  );
}

function CommentItem({ comment }: { comment: Comment }) {
  const [userRating, setUserRating] = useState(0);
  const [helpfulCount, setHelpfulCount] = useState(0);
  
  const handleHelpful = () => {
    setHelpfulCount(prev => prev + 1);
  };
  
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };
  
  const getAvatarElement = () => {
    if (comment.avatar && comment.avatar.startsWith('http')) {
      return (
        <img
          src={comment.avatar}
          alt={comment.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-orange-200 dark:border-orange-800"
        />
      );
    } else if (comment.avatar && comment.avatar.match(/[^\u0000-\uFFFF]/)) {
      return (
        <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 border-2 border-orange-200 dark:border-orange-800 flex items-center justify-center text-xl">
          {comment.avatar}
        </div>
      );
    } else {
      return (
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-orange-200 dark:border-orange-800 flex items-center justify-center text-white font-semibold text-lg">
          {comment.name
            .split(' ')
            .map(word => word.charAt(0))
            .join('')
            .toUpperCase()
            .slice(0, 2)}
        </div>
      );
    }
  };
  
  return (
    <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/60 dark:border-slate-800/60 rounded-2xl p-6 transition-all hover:shadow-md">
      <div className="flex items-start gap-4 mb-4">
        {getAvatarElement()}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h4 className="font-semibold text-slate-900 dark:text-white">{comment.name}</h4>
            <span className="text-xs text-slate-500 dark:text-slate-400">{formatDate(comment.timestamp)}</span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">{comment.email}</p>
          {comment.rating && (
            <div className="flex items-center gap-1 mb-2">
              <span className="text-sm text-slate-600 dark:text-slate-300">Note:</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <ThumbsUp
                    key={i}
                    className={`w-4 h-4 ${i < comment.rating! ? 'text-orange-500 fill-orange-500' : 'text-slate-300 dark:text-slate-600'}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <p className="text-slate-700 dark:text-slate-200 mb-4 leading-relaxed">{comment.message}</p>
      
      <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
        <button
          onClick={handleHelpful}
          className="flex items-center gap-2 px-3 py-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm text-slate-600 dark:text-slate-400"
        >
          <ThumbsUp className="w-4 h-4" />
          Utile ({helpfulCount})
        </button>
      </div>
    </div>
  );
}

function CommentSection({ articleSlug }: { articleSlug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [localRatings, setLocalRatings] = useState<{[key: string]: number}>({});
  
  // Load comments from localStorage on component mount
  useEffect(() => {
    const storedComments = localStorage.getItem(`comments_${articleSlug}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, [articleSlug]);
  
  // Save comments to localStorage when comments change
  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem(`comments_${articleSlug}`, JSON.stringify(comments));
    }
  }, [comments, articleSlug]);
  
  const addComment = (comment: Comment) => {
    setComments(prev => [comment, ...prev]);
    // Update user rating in local storage
    setLocalRatings(prev => ({
      ...prev,
      [comment.id]: comment.rating || 0
    }));
  };
  
  const avgRating = comments.length > 0
    ? comments.reduce((sum, comment) => (comment.rating || 0) + sum, 0) / comments.length
    : 0;
  
  return (
    <div className="mt-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-orange-500" />
            Commentaires ({comments.length})
          </h3>
          <p className="text-slate-600 dark:text-slate-400">Partagez votre avis sur cet article</p>
        </div>
        {comments.length > 0 && (
          <div className="text-right">
            <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">Note moyenne</div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <ThumbsUp
                    key={i}
                    className={`w-5 h-5 ${i < Math.round(avgRating) ? 'text-orange-500 fill-orange-500' : 'text-slate-300 dark:text-slate-600'}`}
                  />
                ))}
              </div>
              <span className="font-semibold text-slate-900 dark:text-white">{avgRating.toFixed(1)}/5</span>
            </div>
          </div>
        )}
      </div>
      
      <CommentForm onAddComment={addComment} />
      
      {comments.length > 0 ? (
        <div className="space-y-6 mt-8">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/60 dark:border-slate-800/60 rounded-2xl">
          <MessageCircle className="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <h4 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">Soyez le premier à commenter</h4>
          <p className="text-slate-500 dark:text-slate-400">Partagez vos thoughts et aidez les autres à découvrir cet article</p>
        </div>
      )}
    </div>
  );
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = getNewsArticle(resolvedParams.slug);
  
  if (!article) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link href="/news" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/60 dark:border-slate-800/60 shadow-sm text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60 transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" />
        Retour aux actualités
      </Link>

      <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/60 dark:border-slate-800/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] rounded-3xl p-8 md:p-12 relative">
        {article.label && (
          <div className="mb-6">
            <span className="px-3 py-1 rounded-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/60 dark:border-slate-800/60 shadow-sm text-slate-800 dark:text-slate-200 text-xs font-bold uppercase tracking-wider">
              {article.label}
            </span>
          </div>
        )}
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
          {article.title}
        </h1>
        
        <div className="flex items-center gap-4 text-sm font-medium text-slate-500 dark:text-slate-400 mb-10 pb-10 border-b border-black/5 dark:border-white/5">
          <div className="flex items-center gap-1.5">
            <User className="w-4 h-4" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <span>{article.date}</span>
          </div>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:text-slate-900 dark:prose-headings:text-white prose-a:text-orange-500 prose-img:rounded-xl">
          <Markdown>{article.content}</Markdown>
        </div>
      </div>

      {/* Social Share */}
      <div className="mt-12 pt-8 border-t border-black/5 dark:border-white/5">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Partager cet article</h3>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => {
              const url = window.location.href;
              if (navigator.share) {
                navigator.share({ title: article.title, text: article.description, url });
              }
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/60 dark:border-slate-800/60 shadow-sm hover:shadow-md transition-all text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
          >
            <Share2 className="w-4 h-4" />
            Partager
          </button>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/60 dark:border-slate-800/60 shadow-sm hover:shadow-md transition-all text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-[#1DA1F2]"
          >
            <Twitter className="w-4 h-4" />
            Twitter/X
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/60 dark:border-slate-800/60 shadow-sm hover:shadow-md transition-all text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-[#1877F2]"
          >
            <Facebook className="w-4 h-4" />
            Facebook
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-plugin/?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(article.title)}&summary=${encodeURIComponent(article.description)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/60 dark:border-slate-800/60 shadow-sm hover:shadow-md transition-all text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-[#0A66C2]"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <button
            onClick={() => {
              const url = window.location.href;
              navigator.clipboard.writeText(url);
              alert('Lien copié !');
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/60 dark:border-slate-800/60 shadow-sm hover:shadow-md transition-all text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
          >
            <Share2 className="w-4 h-4" />
            Copier le lien
          </button>
        </div>
      </div>

      <CommentSection articleSlug={resolvedParams.slug} />
    </div>
  );
}