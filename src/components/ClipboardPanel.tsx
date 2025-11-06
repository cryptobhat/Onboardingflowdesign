import { useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'motion/react';
import { 
  Link, 
  Phone, 
  Mail, 
  FileText, 
  Pin, 
  Trash2,
  Clock,
  Search,
  X
} from 'lucide-react';

interface ClipboardItem {
  id: string;
  type: 'web' | 'phone' | 'email' | 'text';
  content: string;
  timestamp: Date;
  isPinned: boolean;
}

export function ClipboardPanel() {
  const [items, setItems] = useState<ClipboardItem[]>([
    {
      id: '1',
      type: 'web',
      content: 'https://www.instagram.com/reels/C9RL-sa7-3R/?igsh=MXcxbGx0a2R6eg==',
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      isPinned: true
    },
    {
      id: '2',
      type: 'phone',
      content: '+91 98765 43210',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      isPinned: false
    },
    {
      id: '3',
      type: 'email',
      content: 'support@kavikannada.com',
      timestamp: new Date(Date.now() - 1000 * 60 * 60),
      isPinned: true
    },
    {
      id: '4',
      type: 'text',
      content: 'Meeting at 3 PM tomorrow. Please bring the presentation slides.',
      timestamp: new Date(Date.now() - 1000 * 60 * 120),
      isPinned: false
    },
    {
      id: '5',
      type: 'web',
      content: 'https://github.com/KaviKannada/keyboard-app',
      timestamp: new Date(Date.now() - 1000 * 60 * 180),
      isPinned: false
    },
    {
      id: '6',
      type: 'phone',
      content: '285641',
      timestamp: new Date(Date.now() - 1000 * 60 * 240),
      isPinned: false
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [swipedItem, setSwipedItem] = useState<string | null>(null);

  const getIcon = (type: ClipboardItem['type']) => {
    switch (type) {
      case 'web':
        return { Icon: Link, color: 'from-blue-400 to-cyan-500', bg: 'bg-blue-50' };
      case 'phone':
        return { Icon: Phone, color: 'from-green-400 to-emerald-500', bg: 'bg-green-50' };
      case 'email':
        return { Icon: Mail, color: 'from-purple-400 to-violet-500', bg: 'bg-purple-50' };
      case 'text':
        return { Icon: FileText, color: 'from-amber-400 to-orange-500', bg: 'bg-amber-50' };
    }
  };

  const getLabel = (type: ClipboardItem['type']) => {
    switch (type) {
      case 'web': return 'Link';
      case 'phone': return 'Phone';
      case 'email': return 'Email';
      case 'text': return 'Text';
    }
  };

  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  const togglePin = (id: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, isPinned: !item.isPinned } : item
    ));
  };

  const deleteItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
    setSwipedItem(null);
  };

  const handleDragEnd = (id: string, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 100) {
      setSwipedItem(id);
    }
  };

  const filteredItems = items.filter(item => 
    item.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return b.timestamp.getTime() - a.timestamp.getTime();
  });

  return (
    <div className="h-full bg-[#FEF7FF] flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-[#E8DEF8] px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-[16px] flex items-center justify-center shadow-md">
              <FileText className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h2 className="text-[#1C1B1F]">Clipboard</h2>
              <p className="text-xs text-[#79747E]">{items.length} items saved</p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#79747E]" />
          <input
            type="text"
            placeholder="Search clipboard..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-3 bg-[#F3EDF7] border-none rounded-[16px] text-[#1C1B1F] placeholder:text-[#79747E] focus:outline-none focus:ring-2 focus:ring-[#6750A4]/20"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#E8DEF8] rounded-full flex items-center justify-center hover:bg-[#D0BCFF] transition-colors"
            >
              <X className="w-3 h-3 text-[#1C1B1F]" />
            </button>
          )}
        </div>
      </div>

      {/* Clipboard Items */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {sortedItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center px-6">
            <div className="w-20 h-20 bg-[#E8DEF8] rounded-[24px] flex items-center justify-center mb-4">
              <FileText className="w-10 h-10 text-[#6750A4]" strokeWidth={2} />
            </div>
            <h3 className="text-[#1C1B1F] mb-2">No clipboard items</h3>
            <p className="text-sm text-[#79747E]">
              {searchQuery ? 'No items match your search' : 'Copy text to see it here'}
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            <AnimatePresence mode="popLayout">
              {sortedItems.map((item) => {
                const { Icon, color, bg } = getIcon(item.type);
                const isSwipedOut = swipedItem === item.id;

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -300, transition: { duration: 0.2 } }}
                    className="relative"
                  >
                    {/* Delete Background */}
                    <AnimatePresence>
                      {isSwipedOut && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-gradient-to-r from-red-500 to-rose-600 rounded-[20px] flex items-center justify-end px-6"
                        >
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => deleteItem(item.id)}
                            className="flex items-center gap-2 text-white"
                          >
                            <Trash2 className="w-5 h-5" strokeWidth={2.5} />
                            <span className="font-medium">Delete</span>
                          </motion.button>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Swipeable Card */}
                    <motion.div
                      drag="x"
                      dragConstraints={{ left: -150, right: 0 }}
                      dragElastic={0.1}
                      onDragEnd={(_, info) => handleDragEnd(item.id, info)}
                      whileTap={{ cursor: 'grabbing' }}
                      className="relative bg-white rounded-[20px] shadow-sm overflow-hidden cursor-grab active:cursor-grabbing"
                    >
                      <div className="p-4">
                        {/* Header Row */}
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            {/* Type Icon */}
                            <div className={`w-10 h-10 bg-gradient-to-br ${color} rounded-[14px] flex items-center justify-center shadow-sm flex-shrink-0`}>
                              <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                            </div>
                            
                            {/* Type Badge */}
                            <div className={`px-3 py-1 ${bg} rounded-full`}>
                              <span className="text-xs text-[#1C1B1F]">{getLabel(item.type)}</span>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center gap-2">
                            {/* Timestamp */}
                            <div className="flex items-center gap-1.5 text-[#79747E]">
                              <Clock className="w-3.5 h-3.5" strokeWidth={2} />
                              <span className="text-xs">{formatTimestamp(item.timestamp)}</span>
                            </div>

                            {/* Pin Button */}
                            <motion.button
                              whileTap={{ scale: 0.9 }}
                              onClick={() => togglePin(item.id)}
                              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                                item.isPinned 
                                  ? 'bg-gradient-to-br from-amber-400 to-orange-500 shadow-md' 
                                  : 'bg-[#F3EDF7] hover:bg-[#E8DEF8]'
                              }`}
                            >
                              <Pin 
                                className={`w-4 h-4 ${item.isPinned ? 'text-white' : 'text-[#79747E]'}`} 
                                strokeWidth={2.5}
                                fill={item.isPinned ? 'currentColor' : 'none'}
                              />
                            </motion.button>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="pl-13">
                          <p className={`text-[#1C1B1F] ${
                            item.type === 'text' ? 'line-clamp-2' : 'truncate'
                          }`}>
                            {item.content}
                          </p>
                        </div>
                      </div>

                      {/* Swipe Indicator */}
                      <motion.div 
                        className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#6750A4] to-[#D0BCFF]"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Quick Stats Footer */}
      <div className="bg-white border-t border-[#E8DEF8] px-4 py-3">
        <div className="flex items-center justify-around">
          {['web', 'phone', 'email', 'text'].map((type) => {
            const count = items.filter(item => item.type === type).length;
            const { Icon, color } = getIcon(type as ClipboardItem['type']);
            
            return (
              <div key={type} className="flex items-center gap-2">
                <div className={`w-6 h-6 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                </div>
                <span className="text-sm text-[#1C1B1F]">{count}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
