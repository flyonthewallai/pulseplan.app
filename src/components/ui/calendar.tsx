import React from 'react';
import { motion } from 'framer-motion';

interface CalendarEvent {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  day: number; // 0-6 for days of the week
  color?: string;
}

interface CalendarProps {
  events?: CalendarEvent[];
  currentDate?: Date;
  className?: string;
  showAnimations?: boolean;
}

export const Calendar = ({ 
  events = [], 
  currentDate = new Date(), 
  className = "",
  showAnimations = false 
}: CalendarProps) => {
  // Generate week dates (Tuesday to Monday)
  const generateWeekDates = (date: Date) => {
    const tuesday = new Date(date);
    const dayOfWeek = date.getDay();
    const daysToTuesday = dayOfWeek >= 2 ? dayOfWeek - 2 : dayOfWeek + 5;
    tuesday.setDate(date.getDate() - daysToTuesday);
    
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(tuesday);
      day.setDate(tuesday.getDate() + i);
      weekDates.push(day);
    }
    return weekDates;
  };

  // Convert time string to index (12PM = 0, 1PM = 1, etc.)
  const timeToIndex = (time: string) => {
    const hour = parseInt(time.split(':')[0]);
    const period = time.split(' ')[1];
    if (period === 'PM' && hour !== 12) return hour - 12;
    if (period === 'AM' && hour === 12) return 0;
    return hour === 12 ? 0 : hour;
  };

  // Get events for a specific day and time
  const getEventsForSlot = (dayIndex: number, timeIndex: number) => {
    return events.filter(event => {
      const eventDay = event.day;
      const startIndex = timeToIndex(event.startTime);
      const endIndex = timeToIndex(event.endTime);
      return eventDay === dayIndex && timeIndex >= startIndex && timeIndex < endIndex;
    });
  };

  const weekDates = generateWeekDates(currentDate);
  const timeSlots = ['12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];
  const dayNames = ['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'];

  return (
    <div className={`glass-card p-6 rounded-2xl w-96 ${className}`}>
      {/* Calendar Title and Account */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Calendar</h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 bg-gray-800 rounded-lg px-3 py-1">
            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">G</div>
            <span className="text-gray-300 text-xs">dawson@trymartin.com</span>
            <div className="text-gray-400">▼</div>
          </div>
        </div>
      </div>

      {/* Month and Navigation */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm">
          {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </div>
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-white transition-colors">‹</button>
          <span className="text-sm">Today</span>
          <button className="text-gray-400 hover:text-white transition-colors">›</button>
        </div>
      </div>

      {/* Days Row - Week View */}
      <div className="grid grid-cols-7 gap-1 mb-4">
        {weekDates.map((date, index) => {
          const isToday = date.toDateString() === new Date().toDateString();
          return (
            <div key={index} className="text-center">
              <div className="text-gray-400 text-xs">{dayNames[index]}</div>
              <div className={`text-sm py-1 rounded ${isToday ? 'bg-gray-600 text-white' : 'text-gray-300'}`}>
                {date.getDate()}
              </div>
            </div>
          );
        })}
      </div>

      {/* Full Timeblock Schedule - Week View */}
      <div className="border-t border-gray-700 pt-4 relative">
        {/* Hour lines - positioned absolutely to span full width */}
        {timeSlots.map((time, timeIndex) => (
          <div
            key={time}
            className="absolute left-0 right-0 h-px bg-gray-600"
            style={{ top: `${(timeIndex * 48) + 4}px` }}
          />
        ))}
        
        <div className="grid grid-cols-8 gap-1">
          {/* Time Column */}
          <div className="space-y-1">
            {timeSlots.map((time) => (
              <div key={time} className="text-gray-400 text-xs h-12 flex items-start pt-1">
                {time}
              </div>
            ))}
          </div>

          {/* Schedule Columns for each day of the week */}
          {Array.from({ length: 7 }, (_, dayIndex) => (
            <div key={dayIndex} className="relative">
              {Array.from({ length: 9 }, (_, timeIndex) => {
                const slotEvents = getEventsForSlot(dayIndex, timeIndex);
                const isStartOfEvent = slotEvents.some(event => timeToIndex(event.startTime) === timeIndex);
                
                return (
                  <motion.div
                    key={timeIndex}
                    initial={showAnimations ? { opacity: 0 } : { opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={showAnimations ? { 
                      duration: 0.3, 
                      delay: (dayIndex * 0.1) + (timeIndex * 0.05),
                      ease: "easeOut"
                    } : {}}
                    className="h-12 relative overflow-hidden"
                  >
                    {/* Render events */}
                    {isStartOfEvent && slotEvents.map((event, eventIndex) => {
                      const startIndex = timeToIndex(event.startTime);
                      const endIndex = timeToIndex(event.endTime);
                      const duration = endIndex - startIndex;
                      const isOverlapping = slotEvents.length > 1;
                      
                      // Special handling for 5PM overlapping events (Tuesday)
                      let leftPosition = '-2px';
                      let rightPosition = '-2px';
                      
                      if (dayIndex === 0 && timeIndex === 5 && isOverlapping) {
                        if (eventIndex === 0) {
                          // First event (Focused work) - left half
                          leftPosition = '-2px';
                          rightPosition = '50%';
                        } else if (eventIndex === 1) {
                          // Second event (Newsletter) - right half
                          leftPosition = '50%';
                          rightPosition = '-2px';
                        }
                      }
                      
  return (
                        <motion.div
                          key={event.id}
                          initial={showAnimations ? { 
                            opacity: 0, 
                            scale: 0.5,
                            x: -200,
                            y: -100
                          } : { opacity: 1, scale: 1, x: 0, y: 0 }}
                          animate={{ 
                            opacity: 1, 
                            scale: 1,
                            x: 0,
                            y: 0
                          }}
                          transition={showAnimations ? { 
                            duration: 1,
                            delay: 0.5 + (eventIndex * 0.2),
                            ease: "easeOut"
                          } : {}}
                          className={`p-2 text-white text-xs leading-tight bg-gray-700 rounded-lg ${
                            event.color || ''
                          }`}
                          style={{ 
                            height: `${Math.max(duration, 1) * 48}px`, // 48px per hour, minimum 1 hour
                            zIndex: 10,
                            position: 'absolute',
                            top: 0,
                            left: leftPosition,
                            right: rightPosition
                          }}
                        >
                          {event.title}
                        </motion.div>
                      );
                    })}
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
