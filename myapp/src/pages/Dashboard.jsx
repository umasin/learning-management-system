import React, { useState, useEffect } from 'react';
import {
  BookOpen, Bell, Search, Clock,
  TrendingUp, Play, ChevronRight, BarChart3, Target,
  Star, CheckCircle, Users, Menu, X, Home, Trophy, LogOut
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [userName, setUserName] = useState(localStorage.getItem('username') || '')

  const userStats = {
    coursesEnrolled: 12,
    coursesCompleted: 8,
    totalHours: 216,
    streakDays: 23,
    currentLevel: 'Advanced'
  };

  const currentCourses = [
    // {
    //   id: 1,
    //   title: "Advanced React Development",
    //   instructor: "Sarah Johnson",
    //   progress: 75,
    //   nextLesson: "State Management with Redux",
    //   timeLeft: "2h 30m",
    //   category: "Development",
    //   thumbnail: "🚀",
    //   lessons: 24,
    //   completedLessons: 18
    // },
    // {
    //   id: 2,
    //   title: "UI/UX Design Principles",
    //   instructor: "Marcus Chen",
    //   progress: 45,
    //   nextLesson: "Color Theory and Typography",
    //   timeLeft: "4h 15m",
    //   category: "Design",
    //   thumbnail: "🎨",
    //   lessons: 32,
    //   completedLessons: 14
    // },
    {
      id: 3,
      title: "Data Science Fundamentals",
      instructor: "Dr. Priya Sharma",
      progress: 60,
      nextLesson: "Machine Learning Basics",
      timeLeft: "3h 45m",
      category: "Data Science",
      thumbnail: "📊",
      lessons: 28,
      completedLessons: 17
    }
  ];

  const recentActivity = [
    {
      type: "completion",
      title: "Completed: JavaScript ES6 Features",
      time: "2 hours ago",
      icon: CheckCircle,
      color: "text-green-400"
    },
    {
      type: "enrollment",
      title: "Enrolled in Advanced CSS Animations",
      time: "3 days ago",
      icon: BookOpen,
      color: "text-purple-400"
    }
  ];

  const upcomingEvents = [
    {
      title: "Live Workshop: React Performance",
      time: "Today, 3:00 PM",
      instructor: "John Doe",
      type: "workshop"
    },
    {
      title: "Assignment Due: Portfolio Project",
      time: "Tomorrow, 11:59 PM",
      course: "Web Development",
      type: "assignment"
    },
    {
      title: "Webinar: Career in Tech",
      time: "Friday, 2:00 PM",
      instructor: "Tech Leaders Panel",
      type: "webinar"
    }
  ];

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'courses', label: 'My Courses', icon: BookOpen },
    { id: 'progress', label: 'Progress', icon: TrendingUp },
    { id:'addCourses', label:'Add courses ', icon: BookOpen}
  ];
   const handleLogout = () => {
    setIsLoggedOut(true);
    setShowLogoutModal(true);
    // Here you would typically clear user data, tokens, etc.
    // For demo purposes, we'll just show a logout message
  };
// Show logout screen if user is logged out
  if (isLoggedOut) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 text-center max-w-md">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Logged Out Successfully</h2>
          <p className="text-white/70 mb-6">You have been safely logged out of your account.</p>
          <button 
            onClick={() => setIsLoggedOut(false)}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300" >
            Login Again
          </button>
        </div>
      </div>
   );
}
 const CourseCard = ({ course }) => (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
      onClick={() => setSelectedCourse(course)}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="text-3xl">{course.thumbnail}</div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">{course.title}</h3>
            <p className="text-white/60 text-sm">{course.instructor}</p>
          </div>
        </div>
        <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs">
          {course.category}
        </span>
      </div>
 <div className="mb-4">
        <div className="flex justify-between text-sm text-white/80 mb-2">
          <span>Progress</span>
          <span>{course.progress}%</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${course.progress}%` }}
          ></div>
        </div>
      </div>
  <div className="flex items-center justify-between text-sm text-white/70">
        <span>{course.completedLessons}/{course.lessons} lessons</span>
        <span>{course.timeLeft} left</span>
      </div>

      <div className="mt-4 pt-4 border-t border-white/10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/60 text-xs mb-1">Next lesson:</p>
            <p className="text-white text-sm font-medium">{course.nextLesson}</p>
          </div>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:shadow-lg transition-all duration-300">
            <Play className="w-4 h-4" />
            <span>Continue</span>
          </button>
        </div>
      </div>
    </div>
  );
const StatCard = ({ icon: Icon, title, value, change, color }) => (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        {change && (
          <span className="text-green-400 text-sm flex items-center">
            <TrendingUp className="w-4 h-4 mr-1" />
            {change}
          </span>
        )}
      </div>
      <h3 className="text-2xl font-bold text-white mb-1">{value}</h3>
      <p className="text-white/60 text-sm">{title}</p>
    </div>
  );
 return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* LogoutConfirmationModal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 max-w-md w-full mx-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <LogOut className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Confirm Logout</h3>
              <p className="text-white/70 mb-6">Are you sure you want to log out of your account?</p>
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowLogoutModal(false)}
                  className="flex-1 bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogout}
                  className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300" >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-lg border-b border-white/10 sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <button
              className="lg:hidden text-white"
              onClick={() => setIsSidebarOpen(true)}  >
              <Menu className="w-6 h-6" />
            </button>
       <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white hidden sm:block">LearnFlow</span>
            </div>
          </div>
      <div className="flex items-center space-x-4">
            <button className="relative text-white hover:text-purple-300 transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
        <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-medium">AC</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-white font-medium">{userName}</p>
                <p className="text-white/60 text-xs">{userStats.currentLevel} Learner</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="flex h-screen overflow-hidden">
  {/* Sidebar */}
  <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-black/40 backdrop-blur-lg border-r border-white/10 transform transition-transform duration-300 ease-in-out
    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
    lg:translate-x-0 lg:static lg:inset-0 overflow-y-auto`}
  >

          <div className="flex items-center justify-between p-4 lg:hidden">
            <span className="text-white font-semibold">Menu</span>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-white">
              <X className="w-6 h-6" />
            </button>

          </div>
  <nav className="mt-8 px-4">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 mb-2 ${activeTab === item.id
                      ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-500/30'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}>
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>   
            {/* Logout Button */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <button
              onClick={() => setShowLogoutModal(true)}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all duration-200 border border-red-500/30"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </aside>
        {/* Overlay */}
          {isSidebarOpen && (
    <div
      className="fixed inset-0 bg-black/50 z-40 lg:hidden"
      onClick={() => setIsSidebarOpen(false)}
    />
  )}
       {/* Main Content */}
            <main className="flex-1 overflow-auto lg:ml-64">
      <div className="p-4 sm:p-6 lg:p-8">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Welcome Section */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                      Welcome back, {userName.split(' ')[0]}!!!👋
                    </h1>
                    <p className="text-white/70">Ready to continue your learning journey?</p>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <div className="flex items-center space-x-2 text-white/60">
                      <Clock className="w-4 h-4" />
                      <span>Last login: 1 hours ago</span>
                    </div>
                  </div>
                </div>
           {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <StatCard
                    icon={BookOpen}
                    title="Courses Enrolled"
                    value={userStats.coursesEnrolled}
                    change="+2 this month"
                    color="bg-blue-500/20"
                  />
                  <StatCard
                    icon={CheckCircle}
                    title="Completed"
                    value={userStats.coursesCompleted}
                    change="+3 this month"
                    color="bg-green-500/20"
                  />
                  <StatCard
                    icon={Clock}
                    title="Hours Learned"
                    value={`${userStats.totalHours}h`}
                    change="+12h this week"
                    color="bg-purple-500/20"
                  />
                </div>
  {/* Current Courses */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-white">Continue Learning</h2>
                    <button className="text-purple-300 hover:text-white flex items-center space-x-1">
                      <span>View All</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {currentCourses.map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </div>
                </div>

                {/* Dashboard Bottom Section */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Recent Activity */}
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6">
                    <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => {
                        const Icon = activity.icon;
                        return (
                          <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                            <div className={`w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center ${activity.color}`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                              <p className="text-white font-medium">{activity.title}</p>
                              <p className="text-white/60 text-sm">{activity.time}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
  {/* Upcoming Events */}
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6">
                    <h3 className="text-xl font-bold text-white mb-6">Upcoming Events</h3>
                    <div className="space-y-4">
                      {upcomingEvents.map((event, index) => (
                        <div key={index} className="p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-colors">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="text-white font-medium">{event.title}</h4>
                            <span className={`px-2 py-1 rounded text-xs ${event.type === 'workshop' ? 'bg-blue-500/20 text-blue-300' :
                                event.type === 'assignment' ? 'bg-red-500/20 text-red-300' :
                                  'bg-green-500/20 text-green-300'
                              }`}>
                              {event.type}
                            </span>
                          </div>
                          <p className="text-white/60 text-sm mb-1">{event.time}</p>
                          <p className="text-white/80 text-sm">
                            {event.instructor || event.course}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
         {activeTab === 'courses' && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold text-white">My Courses</h1>
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:shadow-lg transition-all duration-300">
                    <BookOpen className="w-5 h-5" />
                    <span>Browse Courses</span>
                  </button>
                </div>
             <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {[...currentCourses, ...currentCourses].map((course, index) => (
                    <CourseCard key={`course-${index}`} course={course} />
                  ))}
                </div>
              </div>
            )}
            {activeTab === 'progress' && (
              <div className="space-y-8">
                <h1 className="text-3xl font-bold text-white">Learning Progress</h1>
         <div className="grid lg:grid-cols-2 gap-8">
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6">
                    <h3 className="text-xl font-bold text-white mb-6">Weekly Progress</h3>
                    <div className="space-y-4">
                      {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
                        <div key={day} className="flex items-center justify-between">
                          <span className="text-white/70">{day}</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-32 bg-white/10 rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                                style={{ width: `${Math.random() * 100}%` }}
                              ></div>
                            </div>
                            <span className="text-white text-sm">{Math.floor(Math.random() * 4)}h</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6">
                    <h3 className="text-xl font-bold text-white mb-6">Achievements</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { icon: Trophy, title: 'Fast Learner', desc: 'Complete 5 courses in a month' },
                        { icon: Target, title: 'Consistent', desc: '7 day learning streak' },
                        { icon: Star, title: 'Top Performer', desc: 'Score 95%+ on 3 assessments' },
                        { icon: Users, title: 'Community Helper', desc: 'Help 10 fellow learners' }
                      ].map((achievement, index) => {
                        const Icon = achievement.icon;
                        return (
                          <div key={index} className="p-4 rounded-lg border border-white/10 text-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="text-white font-medium text-sm mb-1">{achievement.title}</h4>
                            <p className="text-white/60 text-xs">{achievement.desc}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'addCourses' && (
              <div>
              <h2 >Add Course</h2>
              </div>
            )} 
            </div>
            {/* add course */}
        </main>
      </div>
    </div>
  );
};
export default Dashboard;