import "./App.css";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Lock,
  Phone,
  Eye,
  EyeOff,
  LogOut,
  Settings,
  Plus,
  Bell,
  Check,
  X,
  ArrowLeft,
  Edit,
  Save,
  TrendingUp,
  TrendingDown,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Menu,
  Globe,
} from "lucide-react";

// Translations
const translations = {
  bn: {
    // Auth
    welcome: "স্বাগতম",
    appName: "প্রমিস",
    appSubtitle: "ডিজিটাল ক্রেডিট লেজার",
    login: "লগইন",
    register: "নিবন্ধন করুন",
    phone: "মোবাইল নম্বর",
    phonePlaceholder: "০১৭xxxxxxxx",
    name: "নাম",
    namePlaceholder: "আপনার নাম লিখুন",
    pin: "পিন",
    pinPlaceholder: "৪ সংখ্যার পিন",
    confirmPin: "পিন নিশ্চিত করুন",
    forgotPin: "পিন ভুলে গেছেন?",
    dontHaveAccount: "অ্যাকাউন্ট নেই?",
    alreadyHaveAccount: "ইতিমধ্যে অ্যাকাউন্ট আছে?",
    resetPin: "পিন রিসেট করুন",
    sendOtp: "OTP পাঠান",
    verifyOtp: "OTP যাচাই করুন",
    otpPlaceholder: "৬ সংখ্যার OTP",
    newPin: "নতুন পিন",
    backToLogin: "লগইনে ফিরুন",

    // Dashboard
    dashboard: "ড্যাশবোর্ড",
    totalDue: "মোট পাওনা",
    totalOwe: "মোট দেনা",
    addNewPromise: "নতুন প্রমিস যোগ করুন",
    quickReminders: "দ্রুত রিমাইন্ডার",
    recentActivity: "সাম্প্রতিক কার্যক্রম",
    viewAll: "সব দেখুন",

    // Handshake/Ledger
    handshake: "হ্যান্ডশেক",
    requestsToAccept: "গ্রহণের জন্য অনুরোধ",
    activePromises: "সক্রিয় প্রমিস",
    noRequests: "কোনো অনুরোধ নেই",
    noActivePromises: "কোনো সক্রিয় প্রমিস নেই",
    accept: "গ্রহণ করুন",
    reject: "প্রত্যাখ্যান করুন",
    markAsPaid: "পরিশোধিত চিহ্নিত করুন",
    delete: "মুছে ফেলুন",
    sendReminder: "রিমাইন্ডার পাঠান",

    // Status
    pending: "অপেক্ষমাণ",
    accepted: "গৃহীত",
    paid: "পরিশোধিত",
    rejected: "প্রত্যাখ্যাত",

    // Profile
    profile: "প্রোফাইল",
    editProfile: "প্রোফাইল সম্পাদনা করুন",
    changePin: "পিন পরিবর্তন করুন",
    currentPin: "বর্তমান পিন",
    logout: "লগআউট",
    settings: "সেটিংস",
    language: "ভাষা",
    notifications: "নোটিফিকেশন",
    saveChanges: "পরিবর্তন সংরক্ষণ করুন",

    // Add Promise Form
    addPromise: "প্রমিস যোগ করুন",
    selectType: "ধরন নির্বাচন করুন",
    iOwe: "আমি দেনাদার",
    theyOwe: "তারা দেনাদার",
    amount: "টাকা",
    amountPlaceholder: "পরিমাণ লিখুন",
    description: "বিবরণ",
    descriptionPlaceholder: "কিসের জন্য?",
    dueDate: "নির্ধারিত তারিখ",
    submit: "জমা দিন",
    cancel: "বাতিল",

    // Confirmation Modal
    confirmAction: "নিশ্চিত করুন",
    markPaidConfirm: "আপনি কি নিশ্চিত যে এই প্রমিস পরিশোধ করা হয়েছে?",
    deleteConfirm: "আপনি কি নিশ্চিত যে আপনি এই প্রমিস মুছে ফেলতে চান?",
    yes: "হ্যাঁ",
    no: "না",

    // Messages
    loginSuccess: "সফলভাবে লগইন হয়েছে!",
    registerSuccess: "সফলভাবে নিবন্ধিত হয়েছে!",
    otpSent: "OTP পাঠানো হয়েছে!",
    pinChanged: "পিন সফলভাবে পরিবর্তন করা হয়েছে!",
    promiseAdded: "প্রমিস যোগ করা হয়েছে!",
    promiseAccepted: "প্রমিস গৃহীত হয়েছে!",
    promiseRejected: "প্রমিস প্রত্যাখ্যাত হয়েছে!",
    promisePaid: "প্রমিস পরিশোধিত চিহ্নিত হয়েছে!",
    promiseDeleted: "প্রমিস মুছে ফেলা হয়েছে!",
    reminderSent: "রিমাইন্ডার পাঠানো হয়েছে!",

    currency: "৳",
  },
  en: {
    // Auth
    welcome: "Welcome",
    appName: "Promise",
    appSubtitle: "Digital Credit Ledger",
    login: "Login",
    register: "Register",
    phone: "Phone Number",
    phonePlaceholder: "01xxxxxxxxx",
    name: "Name",
    namePlaceholder: "Enter your name",
    pin: "PIN",
    pinPlaceholder: "4-digit PIN",
    confirmPin: "Confirm PIN",
    forgotPin: "Forgot PIN?",
    dontHaveAccount: "Don't have an account?",
    alreadyHaveAccount: "Already have an account?",
    resetPin: "Reset PIN",
    sendOtp: "Send OTP",
    verifyOtp: "Verify OTP",
    otpPlaceholder: "6-digit OTP",
    newPin: "New PIN",
    backToLogin: "Back to Login",

    // Dashboard
    dashboard: "Dashboard",
    totalDue: "Total Due",
    totalOwe: "Total Owe",
    addNewPromise: "Add New Promise",
    quickReminders: "Quick Reminders",
    recentActivity: "Recent Activity",
    viewAll: "View All",

    // Handshake/Ledger
    handshake: "Handshake",
    requestsToAccept: "Requests to Accept",
    activePromises: "Active Promises",
    noRequests: "No pending requests",
    noActivePromises: "No active promises",
    accept: "Accept",
    reject: "Reject",
    markAsPaid: "Mark as Paid",
    delete: "Delete",
    sendReminder: "Send Reminder",

    // Status
    pending: "Pending",
    accepted: "Accepted",
    paid: "Paid",
    rejected: "Rejected",

    // Profile
    profile: "Profile",
    editProfile: "Edit Profile",
    changePin: "Change PIN",
    currentPin: "Current PIN",
    logout: "Logout",
    settings: "Settings",
    language: "Language",
    notifications: "Notifications",
    saveChanges: "Save Changes",

    // Add Promise Form
    addPromise: "Add Promise",
    selectType: "Select Type",
    iOwe: "I Owe",
    theyOwe: "They Owe",
    amount: "Amount",
    amountPlaceholder: "Enter amount",
    description: "Description",
    descriptionPlaceholder: "What for?",
    dueDate: "Due Date",
    submit: "Submit",
    cancel: "Cancel",

    // Confirmation Modal
    confirmAction: "Confirm Action",
    markPaidConfirm: "Are you sure this promise has been paid?",
    deleteConfirm: "Are you sure you want to delete this promise?",
    yes: "Yes",
    no: "No",

    // Messages
    loginSuccess: "Login successful!",
    registerSuccess: "Registration successful!",
    otpSent: "OTP sent!",
    pinChanged: "PIN changed successfully!",
    promiseAdded: "Promise added!",
    promiseAccepted: "Promise accepted!",
    promiseRejected: "Promise rejected!",
    promisePaid: "Promise marked as paid!",
    promiseDeleted: "Promise deleted!",
    reminderSent: "Reminder sent!",

    currency: "৳",
  },
};

export default function App() {
  // Global State
  const [language, setLanguage] = useState("bn");
  const [currentView, setCurrentView] = useState("login"); // login, register, forgotPin, dashboard, handshake, profile, addPromise
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState(null);
  const [confirmModal, setConfirmModal] = useState(null);

  // Auth State
  const [authForm, setAuthForm] = useState({
    phone: "",
    name: "",
    pin: "",
    confirmPin: "",
    otp: "",
  });

  // Profile Edit State
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileForm, setProfileForm] = useState({});

  // Add Promise State
  const [promiseForm, setPromiseForm] = useState({
    type: "theyOwe",
    name: "",
    phone: "",
    amount: "",
    description: "",
    dueDate: "",
  });

  // Mock Data
  const [incomingRequests, setIncomingRequests] = useState([
    {
      id: 1,
      name: "রহিম আহমেদ",
      phone: "01712345678",
      amount: 5000,
      description: "ব্যবসায়িক ঋণ",
      date: "2026-02-01",
      type: "theyOwe",
    },
    {
      id: 2,
      name: "করিম হোসেন",
      phone: "01898765432",
      amount: 3000,
      description: "জরুরী খরচ",
      date: "2026-02-03",
      type: "iOwe",
    },
  ]);

  const [activePromises, setActivePromises] = useState([
    {
      id: 3,
      name: "সালমা বেগম",
      phone: "01556781234",
      amount: 8000,
      description: "দোকান ভাড়া",
      date: "2026-01-28",
      dueDate: "2026-03-01",
      type: "theyOwe",
      status: "accepted",
    },
    {
      id: 4,
      name: "জাহিদ খান",
      phone: "01923456789",
      amount: 2500,
      description: "পণ্য ক্রয়",
      date: "2026-01-30",
      dueDate: "2026-02-15",
      type: "iOwe",
      status: "accepted",
    },
    {
      id: 5,
      name: "নাজমা আক্তার",
      phone: "01645678901",
      amount: 12000,
      description: "বিবাহের খরচ",
      date: "2026-01-15",
      dueDate: "2026-02-28",
      type: "theyOwe",
      status: "paid",
    },
  ]);

  const t = translations[language];

  // Calculate totals
  const totalDue = activePromises
    .filter((p) => p.type === "theyOwe" && p.status !== "paid")
    .reduce((sum, p) => sum + p.amount, 0);

  const totalOwe = activePromises
    .filter((p) => p.type === "iOwe" && p.status !== "paid")
    .reduce((sum, p) => sum + p.amount, 0);

  // Helper Functions
  const showNotification = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const formatAmount = (amount) => {
    return amount.toLocaleString("bn-BD");
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("bn-BD");
  };

  // Auth Handlers
  const handleLogin = (e) => {
    e.preventDefault();
    setUser({
      name: "মোহাম্মদ রহিম",
      phone: authForm.phone,
    });
    setCurrentView("dashboard");
    showNotification(t.loginSuccess);
    setAuthForm({ phone: "", name: "", pin: "", confirmPin: "", otp: "" });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (authForm.pin !== authForm.confirmPin) {
      showNotification("PIN does not match!", "error");
      return;
    }
    setUser({
      name: authForm.name,
      phone: authForm.phone,
    });
    setCurrentView("dashboard");
    showNotification(t.registerSuccess);
    setAuthForm({ phone: "", name: "", pin: "", confirmPin: "", otp: "" });
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    showNotification(t.otpSent);
  };

  const handleResetPin = (e) => {
    e.preventDefault();
    showNotification(t.pinChanged);
    setCurrentView("login");
    setAuthForm({ phone: "", name: "", pin: "", confirmPin: "", otp: "" });
  };

  // Promise Handlers
  const handleAcceptRequest = (id) => {
    const request = incomingRequests.find((r) => r.id === id);
    if (request) {
      setActivePromises([
        ...activePromises,
        { ...request, status: "accepted", dueDate: "2026-03-15" },
      ]);
      setIncomingRequests(incomingRequests.filter((r) => r.id !== id));
      showNotification(t.promiseAccepted);
    }
  };

  const handleRejectRequest = (id) => {
    setIncomingRequests(incomingRequests.filter((r) => r.id !== id));
    showNotification(t.promiseRejected);
  };

  const handleMarkAsPaid = (id) => {
    setConfirmModal({
      type: "markPaid",
      id,
      message: t.markPaidConfirm,
      onConfirm: () => {
        setActivePromises(
          activePromises.map((p) =>
            p.id === id ? { ...p, status: "paid" } : p,
          ),
        );
        showNotification(t.promisePaid);
        setConfirmModal(null);
      },
    });
  };

  const handleDeletePromise = (id) => {
    setConfirmModal({
      type: "delete",
      id,
      message: t.deleteConfirm,
      onConfirm: () => {
        setActivePromises(activePromises.filter((p) => p.id !== id));
        showNotification(t.promiseDeleted);
        setConfirmModal(null);
      },
    });
  };

  const handleSendReminder = (promise) => {
    showNotification(t.reminderSent);
  };

  const handleAddPromise = (e) => {
    e.preventDefault();
    const newPromise = {
      id: Date.now(),
      ...promiseForm,
      amount: parseFloat(promiseForm.amount),
      date: new Date().toISOString().split("T")[0],
      status: "accepted",
    };
    setActivePromises([...activePromises, newPromise]);
    showNotification(t.promiseAdded);
    setCurrentView("dashboard");
    setPromiseForm({
      type: "theyOwe",
      name: "",
      phone: "",
      amount: "",
      description: "",
      dueDate: "",
    });
  };

  // Profile Handlers
  const handleEditProfile = () => {
    setIsEditingProfile(true);
    setProfileForm({ ...user });
  };

  const handleSaveProfile = () => {
    setUser({ ...profileForm });
    setIsEditingProfile(false);
    showNotification(t.saveChanges);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView("login");
    showNotification(t.logout);
  };

  // Page Transition Animation
  const pageVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  // Components
  const Notification = () => {
    if (!notification) return null;

    const bgColor =
      notification.type === "success" ? "bg-emerald-500" : "bg-red-500";

    return (
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 max-w-md`}
      >
        {notification.message}
      </motion.div>
    );
  };

  const ConfirmModal = () => {
    if (!confirmModal) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-2xl p-6 max-w-sm w-full"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            {t.confirmAction}
          </h3>
          <p className="text-gray-600 mb-6">{confirmModal.message}</p>
          <div className="flex gap-3">
            <button
              onClick={confirmModal.onConfirm}
              className="flex-1 bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
            >
              {t.yes}
            </button>
            <button
              onClick={() => setConfirmModal(null)}
              className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              {t.no}
            </button>
          </div>
        </motion.div>
      </div>
    );
  };

  const BottomNav = () => {
    if (!user) return null;

    const navItems = [
      { view: "dashboard", icon: TrendingUp, label: t.dashboard },
      { view: "handshake", icon: Clock, label: t.handshake },
      { view: "profile", icon: User, label: t.profile },
    ];

    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-[400px] mx-auto flex justify-around">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => setCurrentView(item.view)}
              className={`flex-1 flex flex-col items-center py-3 transition-colors ${
                currentView === item.view
                  ? "text-emerald-600"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <item.icon size={24} />
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    );
  };

  // Views
  const LoginView = () => (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen flex items-center justify-center p-6"
    >
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-emerald-600 mb-2">
            {t.appName}
          </h1>
          <p className="text-gray-600">{t.appSubtitle}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.login}</h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Phone size={16} className="inline mr-1" />
                {t.phone}
              </label>
              <input
                type="tel"
                value={authForm.phone}
                onChange={(e) =>
                  setAuthForm({ ...authForm, phone: e.target.value })
                }
                placeholder={t.phonePlaceholder}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Lock size={16} className="inline mr-1" />
                {t.pin}
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={authForm.pin}
                  onChange={(e) =>
                    setAuthForm({ ...authForm, pin: e.target.value })
                  }
                  placeholder={t.pinPlaceholder}
                  maxLength="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setCurrentView("forgotPin")}
              className="text-sm text-emerald-600 hover:underline"
            >
              {t.forgotPin}
            </button>

            <button
              type="submit"
              className="w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
            >
              {t.login}
            </button>
          </form>

          <p className="text-center mt-6 text-sm text-gray-600">
            {t.dontHaveAccount}{" "}
            <button
              onClick={() => setCurrentView("register")}
              className="text-emerald-600 font-semibold hover:underline"
            >
              {t.register}
            </button>
          </p>
        </div>
      </div>
    </motion.div>
  );

  const RegisterView = () => (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen flex items-center justify-center p-6"
    >
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-emerald-600 mb-2">
            {t.appName}
          </h1>
          <p className="text-gray-600">{t.appSubtitle}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <button
            onClick={() => setCurrentView("login")}
            className="flex items-center text-emerald-600 mb-4 hover:underline"
          >
            <ArrowLeft size={20} className="mr-1" />
            {t.backToLogin}
          </button>

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {t.register}
          </h2>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <User size={16} className="inline mr-1" />
                {t.name}
              </label>
              <input
                type="text"
                value={authForm.name}
                onChange={(e) =>
                  setAuthForm({ ...authForm, name: e.target.value })
                }
                placeholder={t.namePlaceholder}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Phone size={16} className="inline mr-1" />
                {t.phone}
              </label>
              <input
                type="tel"
                value={authForm.phone}
                onChange={(e) =>
                  setAuthForm({ ...authForm, phone: e.target.value })
                }
                placeholder={t.phonePlaceholder}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Lock size={16} className="inline mr-1" />
                {t.pin}
              </label>
              <input
                type="password"
                value={authForm.pin}
                onChange={(e) =>
                  setAuthForm({ ...authForm, pin: e.target.value })
                }
                placeholder={t.pinPlaceholder}
                maxLength="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Lock size={16} className="inline mr-1" />
                {t.confirmPin}
              </label>
              <input
                type="password"
                value={authForm.confirmPin}
                onChange={(e) =>
                  setAuthForm({ ...authForm, confirmPin: e.target.value })
                }
                placeholder={t.pinPlaceholder}
                maxLength="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
            >
              {t.register}
            </button>
          </form>

          <p className="text-center mt-6 text-sm text-gray-600">
            {t.alreadyHaveAccount}{" "}
            <button
              onClick={() => setCurrentView("login")}
              className="text-emerald-600 font-semibold hover:underline"
            >
              {t.login}
            </button>
          </p>
        </div>
      </div>
    </motion.div>
  );

  const ForgotPinView = () => (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen flex items-center justify-center p-6"
    >
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <button
            onClick={() => setCurrentView("login")}
            className="flex items-center text-emerald-600 mb-4 hover:underline"
          >
            <ArrowLeft size={20} className="mr-1" />
            {t.backToLogin}
          </button>

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {t.resetPin}
          </h2>

          <form onSubmit={handleResetPin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Phone size={16} className="inline mr-1" />
                {t.phone}
              </label>
              <input
                type="tel"
                value={authForm.phone}
                onChange={(e) =>
                  setAuthForm({ ...authForm, phone: e.target.value })
                }
                placeholder={t.phonePlaceholder}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
            </div>

            <button
              type="button"
              onClick={handleSendOtp}
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              {t.sendOtp}
            </button>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t.verifyOtp}
              </label>
              <input
                type="text"
                value={authForm.otp}
                onChange={(e) =>
                  setAuthForm({ ...authForm, otp: e.target.value })
                }
                placeholder={t.otpPlaceholder}
                maxLength="6"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Lock size={16} className="inline mr-1" />
                {t.newPin}
              </label>
              <input
                type="password"
                value={authForm.pin}
                onChange={(e) =>
                  setAuthForm({ ...authForm, pin: e.target.value })
                }
                placeholder={t.pinPlaceholder}
                maxLength="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
            >
              {t.resetPin}
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );

  const DashboardView = () => (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pb-20"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-black p-6 rounded-b-3xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold">{t.welcome}</h2>
            <p className="text-emerald-100">{user?.name}</p>
          </div>
          <button
            onClick={() => setCurrentView("profile")}
            className="bg-white bg-opacity-20 p-2 rounded-full"
          >
            <User size={24} />
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center mb-2">
              <TrendingUp size={20} className="mr-2" />
              <span className="text-sm">{t.totalDue}</span>
            </div>
            <div className="text-2xl font-bold">
              {t.currency} {formatAmount(totalDue)}
            </div>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center mb-2">
              <TrendingDown size={20} className="mr-2" />
              <span className="text-sm">{t.totalOwe}</span>
            </div>
            <div className="text-2xl font-bold">
              {t.currency} {formatAmount(totalOwe)}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 space-y-3">
        <button
          onClick={() => setCurrentView("addPromise")}
          className="w-full bg-emerald-500 text-white py-4 rounded-xl font-semibold flex items-center justify-center shadow-lg hover:bg-emerald-600 transition-colors"
        >
          <Plus size={20} className="mr-2" />
          {t.addNewPromise}
        </button>
        <button
          onClick={() => setCurrentView("handshake")}
          className="w-full bg-blue-500 text-white py-4 rounded-xl font-semibold flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors"
        >
          <Bell size={20} className="mr-2" />
          {t.quickReminders}
        </button>
      </div>

      {/* Recent Activity */}
      <div className="px-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">
            {t.recentActivity}
          </h3>
          <button
            onClick={() => setCurrentView("handshake")}
            className="text-emerald-600 text-sm font-semibold"
          >
            {t.viewAll}
          </button>
        </div>

        <div className="space-y-3">
          {activePromises.slice(0, 3).map((promise) => (
            <div
              key={promise.id}
              className="bg-white rounded-xl p-4 shadow-md border border-gray-100"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">
                    {promise.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {promise.description}
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className={`text-lg font-bold ${
                      promise.type === "theyOwe"
                        ? "text-emerald-600"
                        : "text-red-600"
                    }`}
                  >
                    {t.currency} {formatAmount(promise.amount)}
                  </div>
                  <div
                    className={`inline-block mt-1 px-2 py-1 rounded-full text-xs font-semibold ${
                      promise.status === "paid"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-emerald-100 text-emerald-800"
                    }`}
                  >
                    {t[promise.status]}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const HandshakeView = () => (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pb-20"
    >
      {/* Header */}
      <div className="bg-white p-6 border-b border-gray-200 sticky top-0 z-10">
        <h2 className="text-2xl font-bold text-gray-800">{t.handshake}</h2>
      </div>

      {/* Incoming Requests */}
      <div className="p-6">
        <div className="flex items-center mb-4">
          <AlertCircle size={20} className="text-yellow-500 mr-2" />
          <h3 className="text-lg font-bold text-gray-800">
            {t.requestsToAccept}
          </h3>
          {incomingRequests.length > 0 && (
            <span className="ml-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              {incomingRequests.length}
            </span>
          )}
        </div>

        {incomingRequests.length === 0 ? (
          <div className="text-center py-8 text-gray-400">{t.noRequests}</div>
        ) : (
          <div className="space-y-3 mb-8">
            {incomingRequests.map((request) => (
              <motion.div
                key={request.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-yellow-50 border border-yellow-200 rounded-xl p-4"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">
                      {request.name}
                    </div>
                    <div className="text-sm text-gray-500">{request.phone}</div>
                    <div className="text-sm text-gray-600 mt-1">
                      {request.description}
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className={`text-lg font-bold ${
                        request.type === "theyOwe"
                          ? "text-emerald-600"
                          : "text-red-600"
                      }`}
                    >
                      {t.currency} {formatAmount(request.amount)}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {request.type === "theyOwe" ? t.theyOwe : t.iOwe}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleAcceptRequest(request.id)}
                    className="flex-1 bg-emerald-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-emerald-600 transition-colors flex items-center justify-center"
                  >
                    <Check size={16} className="mr-1" />
                    {t.accept}
                  </button>
                  <button
                    onClick={() => handleRejectRequest(request.id)}
                    className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-colors flex items-center justify-center"
                  >
                    <X size={16} className="mr-1" />
                    {t.reject}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Active Promises */}
        <div className="flex items-center mb-4">
          <CheckCircle size={20} className="text-emerald-500 mr-2" />
          <h3 className="text-lg font-bold text-gray-800">
            {t.activePromises}
          </h3>
        </div>

        {activePromises.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            {t.noActivePromises}
          </div>
        ) : (
          <div className="space-y-3">
            {activePromises.map((promise) => (
              <motion.div
                key={promise.id}
                layout
                className={`rounded-xl p-4 border ${
                  promise.status === "paid"
                    ? "bg-blue-50 border-blue-200"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">
                      {promise.name}
                    </div>
                    <div className="text-sm text-gray-500">{promise.phone}</div>
                    <div className="text-sm text-gray-600 mt-1">
                      {promise.description}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Due: {formatDate(promise.dueDate)}
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className={`text-lg font-bold ${
                        promise.status === "paid"
                          ? "text-blue-600"
                          : promise.type === "theyOwe"
                            ? "text-emerald-600"
                            : "text-red-600"
                      }`}
                    >
                      {t.currency} {formatAmount(promise.amount)}
                    </div>
                    <div
                      className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${
                        promise.status === "paid"
                          ? "bg-blue-200 text-blue-800"
                          : "bg-emerald-200 text-emerald-800"
                      }`}
                    >
                      {t[promise.status]}
                    </div>
                  </div>
                </div>
                {promise.status !== "paid" && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleMarkAsPaid(promise.id)}
                      className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors"
                    >
                      {t.markAsPaid}
                    </button>
                    <button
                      onClick={() => handleSendReminder(promise)}
                      className="flex-1 bg-yellow-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-yellow-600 transition-colors"
                    >
                      {t.sendReminder}
                    </button>
                    <button
                      onClick={() => handleDeletePromise(promise.id)}
                      className="bg-red-100 text-red-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-200 transition-colors"
                    >
                      {t.delete}
                    </button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );

  const AddPromiseView = () => (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pb-20"
    >
      <div className="bg-white p-6 border-b border-gray-200 sticky top-0 z-10">
        <button
          onClick={() => setCurrentView("dashboard")}
          className="flex items-center text-emerald-600 mb-2 hover:underline"
        >
          <ArrowLeft size={20} className="mr-1" />
          {t.dashboard}
        </button>
        <h2 className="text-2xl font-bold text-gray-800">{t.addPromise}</h2>
      </div>

      <div className="p-6">
        <form onSubmit={handleAddPromise} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t.selectType}
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() =>
                  setPromiseForm({ ...promiseForm, type: "theyOwe" })
                }
                className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
                  promiseForm.type === "theyOwe"
                    ? "bg-emerald-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {t.theyOwe}
              </button>
              <button
                type="button"
                onClick={() => setPromiseForm({ ...promiseForm, type: "iOwe" })}
                className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
                  promiseForm.type === "iOwe"
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {t.iOwe}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t.name}
            </label>
            <input
              type="text"
              value={promiseForm.name}
              onChange={(e) =>
                setPromiseForm({ ...promiseForm, name: e.target.value })
              }
              placeholder={t.namePlaceholder}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t.phone}
            </label>
            <input
              type="tel"
              value={promiseForm.phone}
              onChange={(e) =>
                setPromiseForm({ ...promiseForm, phone: e.target.value })
              }
              placeholder={t.phonePlaceholder}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t.amount}
            </label>
            <input
              type="number"
              value={promiseForm.amount}
              onChange={(e) =>
                setPromiseForm({ ...promiseForm, amount: e.target.value })
              }
              placeholder={t.amountPlaceholder}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t.description}
            </label>
            <input
              type="text"
              value={promiseForm.description}
              onChange={(e) =>
                setPromiseForm({ ...promiseForm, description: e.target.value })
              }
              placeholder={t.descriptionPlaceholder}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t.dueDate}
            </label>
            <input
              type="date"
              value={promiseForm.dueDate}
              onChange={(e) =>
                setPromiseForm({ ...promiseForm, dueDate: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
            >
              {t.submit}
            </button>
            <button
              type="button"
              onClick={() => setCurrentView("dashboard")}
              className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              {t.cancel}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );

  const ProfileView = () => (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pb-20"
    >
      <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-black p-6 rounded-b-3xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{t.profile}</h2>
        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
          <div className="flex items-center">
            <div className="bg-white bg-opacity-30 p-4 rounded-full mr-4">
              <User size={40} />
            </div>
            <div>
              <div className="text-xl font-bold">{user?.name}</div>
              <div className="text-emerald-100">{user?.phone}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-3">
        {isEditingProfile ? (
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              {t.editProfile}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.name}
                </label>
                <input
                  type="text"
                  value={profileForm.name || ""}
                  onChange={(e) =>
                    setProfileForm({ ...profileForm, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.phone}
                </label>
                <input
                  type="tel"
                  value={profileForm.phone || ""}
                  onChange={(e) =>
                    setProfileForm({ ...profileForm, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleSaveProfile}
                  className="flex-1 bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors flex items-center justify-center"
                >
                  <Save size={20} className="mr-2" />
                  {t.saveChanges}
                </button>
                <button
                  onClick={() => setIsEditingProfile(false)}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  {t.cancel}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <button
              onClick={handleEditProfile}
              className="w-full bg-white rounded-xl p-4 shadow-md flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center">
                <Edit size={20} className="text-emerald-600 mr-3" />
                <span className="font-semibold text-gray-800">
                  {t.editProfile}
                </span>
              </div>
              <ArrowLeft
                size={20}
                className="text-gray-400 transform rotate-180"
              />
            </button>

            <button className="w-full bg-white rounded-xl p-4 shadow-md flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center">
                <Lock size={20} className="text-emerald-600 mr-3" />
                <span className="font-semibold text-gray-800">
                  {t.changePin}
                </span>
              </div>
              <ArrowLeft
                size={20}
                className="text-gray-400 transform rotate-180"
              />
            </button>

            <button className="w-full bg-white rounded-xl p-4 shadow-md flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center">
                <Settings size={20} className="text-emerald-600 mr-3" />
                <span className="font-semibold text-gray-800">
                  {t.settings}
                </span>
              </div>
              <ArrowLeft
                size={20}
                className="text-gray-400 transform rotate-180"
              />
            </button>

            <button
              onClick={handleLogout}
              className="w-full bg-red-500 text-white rounded-xl p-4 shadow-md flex items-center justify-center hover:bg-red-600 transition-colors"
            >
              <LogOut size={20} className="mr-2" />
              <span className="font-semibold">{t.logout}</span>
            </button>
          </>
        )}
      </div>
    </motion.div>
  );

  // Main Render
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50"
      style={{
        fontFamily:
          "'Hind Siliguri', 'Noto Sans Bengali', system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Language Switcher - Sticky */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setLanguage(language === "bn" ? "en" : "bn")}
          className="bg-white shadow-lg px-4 py-2 rounded-full flex items-center font-semibold text-gray-700 hover:shadow-xl transition-all"
        >
          <Globe size={18} className="mr-2" />
          {language === "bn" ? "English" : "বাংলা"}
        </button>
      </div>

      {/* App Shell - Mobile First Container */}
      <div className="max-w-[400px] mx-auto bg-white min-h-screen shadow-2xl relative">
        <AnimatePresence mode="wait">
          <Notification key="notification" />
          {confirmModal && <ConfirmModal key="confirmModal" />}

          {currentView === "login" && <LoginView key="login" />}
          {currentView === "register" && <RegisterView key="register" />}
          {currentView === "forgotPin" && <ForgotPinView key="forgotPin" />}
          {currentView === "dashboard" && <DashboardView key="dashboard" />}
          {currentView === "handshake" && <HandshakeView key="handshake" />}
          {currentView === "addPromise" && <AddPromiseView key="addPromise" />}
          {currentView === "profile" && <ProfileView key="profile" />}
        </AnimatePresence>

        <BottomNav />
      </div>
    </div>
  );
}
