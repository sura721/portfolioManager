import { useState } from "react";
import { useFormStore } from "../store/useFormStore";
import {
  Github,
  Linkedin,
  Mail,
  Globe,
  Facebook,
  Phone,
  Youtube,
  MessageCircle,
  Send,
} from "lucide-react";

const iconOptions = {
  Github: <Github className="h-5 w-5" />,
  Linkedin: <Linkedin className="h-5 w-5" />,
  Mail: <Mail className="h-5 w-5" />,
  Website: <Globe className="h-5 w-5" />,
  Facebook: <Facebook className="h-5 w-5" />,
  WhatsApp: <Phone className="h-5 w-5" />,
  Telegram: <Send className="h-5 w-5" />,
  Skype: <MessageCircle className="h-5 w-5" />,
  YouTube: <Youtube className="h-5 w-5" />,
};

export default function SocialLinkForm() {
  const { submitForm } = useFormStore();
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [iconName, setIconName] = useState("Github");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newLink = {
      name,
      icon: iconName, 
      url,
    };

    try {
      await submitForm("/socialLinks", newLink);
    } catch (err) {
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-4">
      <div className="w-full max-w-lg bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl text-white">
        <h2 className="text-3xl font-bold text-center text-indigo-300 mb-6">
          🌐 Add Social Link
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm mb-1">Platform Name</label>
            <input
              type="text"
              placeholder="e.g. GitHub"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          {/* URL */}
          <div>
            <label className="block text-sm mb-1">Profile URL</label>
            <input
              type="url"
              placeholder="https:github.com/username"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          {/* Icon Selector */}
          <div>
            <label className="block text-sm mb-1">Choose Icon</label>
            <select
              value={iconName}
              onChange={(e) => setIconName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              {Object.keys(iconOptions).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>

            <div className="mt-3 text-sm flex items-center gap-2 text-indigo-300">
              <span>:</span>
              {iconOptions[iconName]}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 py-2 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Post Link 🔗
          </button>
        </form>
      </div>
    </div>
  );
}
