import React, { useState, useRef, useEffect } from 'react';
import { useUser } from '../../context/UserContext';
import {
  Sparkles,
  Send,
  Bot,
  User,
  BrainCircuit,
  Layers,
  Presentation,
  CheckCircle,
  RotateCcw,
  BookOpen,
  HelpCircle,
  Copy,
  Check,
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  modelUsed?: string;
  generatedContent?: {
    type: 'flashcards' | 'slides' | 'quiz';
    data: any;
  };
}

export const AiGuruView: React.FC = () => {
  const { addXp } = useUser();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      role: 'model',
      text: 'Namaste! I am your AI Guru. Ask me anything about Vedic mantras, philosophical scriptures, ancient manuscripts, temple fractal architecture, or Ayurvedic botanical sciences. You can also ask me to generate custom flashcard decks, presentations, or quizzes on any topic!',
    },
  ]);

  const [inputPrompt, setInputPrompt] = useState<string>('');
  const [chatMode, setChatMode] = useState<'simple' | 'scholarly' | 'story'>('simple');
  const [highThinking, setHighThinking] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [generatingType, setGeneratingType] = useState<'flashcards' | 'slides' | 'quiz' | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const samplePrompts = [
    "Explain Gita 2.47 like I'm 15",
    "What does Nasadiya Sukta say about quantum origin?",
    "How does Atharvaveda connect with modern biochemistry?",
    "Why is the Kailasa temple at Ellora carved top-down?",
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputPrompt;
    if (!text.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      role: 'user',
      text: text.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputPrompt('');
    setIsLoading(true);

    try {
      const historyPayload = [...messages, userMessage].map((m) => ({
        role: m.role,
        text: m.text,
      }));

      const res = await fetch('/api/guru/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: historyPayload,
          mode: chatMode,
          highThinking,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to fetch AI Guru response');
      }

      const data = await res.json();
      const botMessage: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        role: 'model',
        text: data.reply || 'Wisdom received.',
        modelUsed: data.modelUsed,
      };

      setMessages((prev) => [...prev, botMessage]);
      addXp(10); // Reward 10 XP for inquiry
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          id: `msg-err-${Date.now()}`,
          role: 'model',
          text: `Forgive me, seeker. A momentary disturbance occurred: ${err.message}. Please try again.`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerate = async (type: 'flashcards' | 'slides' | 'quiz') => {
    const topic = inputPrompt.trim() || 'Core Vedic Philosophy';
    setGeneratingType(type);
    setIsLoading(true);

    const userMessage: ChatMessage = {
      id: `gen-req-${Date.now()}`,
      role: 'user',
      text: `Generate a custom ${type} deck for topic: "${topic}"`,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputPrompt('');

    try {
      const res = await fetch('/api/guru/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, topic }),
      });

      if (!res.ok) {
        throw new Error('Failed to generate study assets');
      }

      const data = await res.json();
      const botMessage: ChatMessage = {
        id: `gen-res-${Date.now() + 1}`,
        role: 'model',
        text: `Here is your custom ${type} deck on "${topic}":`,
        modelUsed: data.modelUsed,
        generatedContent: {
          type,
          data: data.data,
        },
      };

      setMessages((prev) => [...prev, botMessage]);
      addXp(25);
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          id: `gen-err-${Date.now()}`,
          role: 'model',
          text: `Could not generate ${type}: ${err.message}`,
        },
      ]);
    } finally {
      setIsLoading(false);
      setGeneratingType(null);
    }
  };

  const handleCopyMessage = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 pb-16 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-1">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Gemini Multi-Turn Conversational Mentor</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
            AI Guru
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
            Strictly grounded in authentic Sanskrit texts, respectful, non-sectarian, and never hallucinating verses.
          </p>
        </div>

        {/* Mode Selector & High-Thinking Toggle */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Modes */}
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 text-xs">
            <button
              onClick={() => setChatMode('simple')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                chatMode === 'simple'
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Explain Like 15
            </button>
            <button
              onClick={() => setChatMode('scholarly')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                chatMode === 'scholarly'
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Scholarly
            </button>
            <button
              onClick={() => setChatMode('story')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                chatMode === 'story'
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Story Mode
            </button>
          </div>

          {/* High Thinking Toggle */}
          <button
            onClick={() => setHighThinking((prev) => !prev)}
            className={`min-h-[38px] px-3 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
              highThinking
                ? 'bg-purple-950/60 border-purple-500 text-purple-300 ring-1 ring-purple-500/50 shadow-md shadow-purple-500/20'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <BrainCircuit className="w-3.5 h-3.5 text-purple-400" />
            <span>High Thinking</span>
          </button>
        </div>
      </div>

      {/* Chat Thread Container */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-4 sm:p-6 shadow-2xl min-h-[500px] max-h-[620px] overflow-y-auto space-y-4">
        {messages.map((msg) => {
          const isUser = msg.role === 'user';

          return (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {/* Avatar */}
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                  isUser
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-purple-600/20 border border-purple-500/40 text-purple-300'
                }`}
              >
                {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              {/* Message Bubble */}
              <div
                className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 space-y-2 text-xs sm:text-sm leading-relaxed ${
                  isUser
                    ? 'bg-amber-500/15 border border-amber-500/30 text-amber-100 rounded-tr-none'
                    : 'bg-slate-950/80 border border-slate-800 text-slate-200 rounded-tl-none'
                }`}
              >
                <div className="whitespace-pre-wrap">{msg.text}</div>

                {/* Render Generated Structured Content If Any */}
                {msg.generatedContent && (
                  <div className="mt-3 pt-3 border-t border-slate-800 space-y-2">
                    {/* Flashcards Render */}
                    {msg.generatedContent.type === 'flashcards' && msg.generatedContent.data.cards && (
                      <div className="space-y-2">
                        <div className="font-bold text-amber-400 text-xs">
                          {msg.generatedContent.data.deckTitle || 'Generated Flashcards'}
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                          {msg.generatedContent.data.cards.map((card: any, cIdx: number) => (
                            <div key={cIdx} className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
                              <div className="font-semibold text-white">{card.front}</div>
                              {card.devanagari && <div className="text-amber-300 font-serif text-xs">{card.devanagari}</div>}
                              <div className="text-slate-300 text-xs">{card.back}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Slides Render */}
                    {msg.generatedContent.type === 'slides' && msg.generatedContent.data.slides && (
                      <div className="space-y-2">
                        <div className="font-bold text-purple-400 text-xs">
                          {msg.generatedContent.data.topic} Slide Deck
                        </div>
                        <div className="space-y-2">
                          {msg.generatedContent.data.slides.map((s: any, sIdx: number) => (
                            <div key={sIdx} className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1.5">
                              <div className="font-bold text-white text-xs">{sIdx + 1}. {s.title}</div>
                              <ul className="list-disc list-inside text-xs text-slate-300 space-y-0.5">
                                {s.keyPoints?.map((p: string, pIdx: number) => (
                                  <li key={pIdx}>{p}</li>
                                ))}
                              </ul>
                              {s.quote && <div className="text-[11px] text-amber-300 italic">"{s.quote}"</div>}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Quiz Render */}
                    {msg.generatedContent.type === 'quiz' && msg.generatedContent.data.questions && (
                      <div className="space-y-2">
                        <div className="font-bold text-emerald-400 text-xs">
                          {msg.generatedContent.data.title}
                        </div>
                        <div className="space-y-2">
                          {msg.generatedContent.data.questions.map((q: any, qIdx: number) => (
                            <div key={qIdx} className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
                              <div className="font-semibold text-white text-xs">{qIdx + 1}. {q.question}</div>
                              <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-300">
                                {q.options?.map((opt: string, oIdx: number) => (
                                  <div key={oIdx} className="p-1 rounded bg-slate-950/60 border border-slate-850">
                                    {String.fromCharCode(65 + oIdx)}. {opt}
                                  </div>
                                ))}
                              </div>
                              <div className="text-[11px] text-emerald-400">
                                Correct: Option {String.fromCharCode(65 + (q.correctIndex || 0))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Footer with model info & copy */}
                {!isUser && (
                  <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-850">
                    <span className="font-mono">
                      {msg.modelUsed ? `Model: ${msg.modelUsed}` : 'Grounded in Vedic Corpus'}
                    </span>
                    <button
                      onClick={() => handleCopyMessage(msg.id, msg.text)}
                      className="hover:text-slate-300 flex items-center gap-1"
                    >
                      {copiedId === msg.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-purple-600/20 border border-purple-500/40 text-purple-300 flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4 animate-spin" />
            </div>
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl rounded-tl-none p-4 text-xs text-slate-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>
                {generatingType
                  ? `Generating custom ${generatingType} deck via Gemini...`
                  : highThinking
                  ? 'Deep philological contemplation via Gemini 3.1 Pro (Thinking Mode High)...'
                  : 'Consulting canonical Vedic corpus...'}
              </span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Prompt Chips */}
      <div className="space-y-2">
        <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
          Suggested Inquiries:
        </div>
        <div className="flex flex-wrap gap-1.5">
          {samplePrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(p)}
              disabled={isLoading}
              className="text-xs px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-500/50 text-slate-300 hover:text-amber-300 transition-colors disabled:opacity-50"
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* "Generate For Me" Action Bar */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-slate-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Generate Study Assets (type a topic above or below):</span>
          </span>
          <span className="text-slate-500">Gemini Flash-Lite</span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => handleGenerate('flashcards')}
            disabled={isLoading}
            className="min-h-[40px] px-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-purple-500 text-slate-300 hover:text-purple-300 font-medium text-xs flex items-center justify-center gap-1.5 transition-colors disabled:opacity-50"
          >
            <Layers className="w-3.5 h-3.5 text-purple-400" />
            <span>Flashcards</span>
          </button>
          <button
            onClick={() => handleGenerate('slides')}
            disabled={isLoading}
            className="min-h-[40px] px-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-purple-500 text-slate-300 hover:text-purple-300 font-medium text-xs flex items-center justify-center gap-1.5 transition-colors disabled:opacity-50"
          >
            <Presentation className="w-3.5 h-3.5 text-purple-400" />
            <span>Slide Deck</span>
          </button>
          <button
            onClick={() => handleGenerate('quiz')}
            disabled={isLoading}
            className="min-h-[40px] px-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-purple-500 text-slate-300 hover:text-purple-300 font-medium text-xs flex items-center justify-center gap-1.5 transition-colors disabled:opacity-50"
          >
            <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
            <span>Interactive Quiz</span>
          </button>
        </div>
      </div>

      {/* Input Form Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="flex items-center gap-2"
      >
        <input
          type="text"
          value={inputPrompt}
          onChange={(e) => setInputPrompt(e.target.value)}
          placeholder={`Ask AI Guru (${chatMode} mode)...`}
          className="flex-1 min-h-[48px] px-4 rounded-2xl bg-slate-900 border border-slate-800 focus:border-amber-500/80 focus:ring-1 focus:ring-amber-500 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition-all"
        />

        <button
          type="submit"
          disabled={!inputPrompt.trim() || isLoading}
          className="min-h-[48px] px-5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm flex items-center gap-2 transition-all shadow-md shadow-amber-500/20 active:scale-95 disabled:opacity-40 disabled:pointer-events-none"
        >
          <span>Ask</span>
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
