import React, { useState, useRef } from 'react';
import { X, Calendar, Clock, Plus } from 'lucide-react';
import './TasksCardReact.css';

interface Task {
  id: string;
  title: string;
  status: 'pending' | 'completed';
  priority: 'high' | 'medium' | 'low';
  due_date: string;
}

interface TasksCardProps {
  onPress?: () => void;
  tasks?: Task[];
  onUpdateTask?: (taskId: string, updates: Partial<Task>) => void;
  theme?: {
    colors: {
      surface: string;
      background: string;
      textPrimary: string;
      textSecondary: string;
      primary: string;
      border: string;
    };
  };
}

const TasksCard: React.FC<TasksCardProps> = ({ 
  onPress, 
  tasks = [], 
  onUpdateTask,
  theme = {
    colors: {
      surface: '#ffffff',
      background: '#f5f5f5',
      textPrimary: '#000000',
      textSecondary: '#666666',
      primary: '#007AFF',
      border: '#e0e0e0'
    }
  }
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  // Filter to current/upcoming tasks (not completed)
  const currentTasks = tasks.filter(task => task.status !== 'completed');

  const handleToggleTask = (taskId: string) => {
    const task = currentTasks.find(t => t.id === taskId);
    if (task && onUpdateTask) {
      const newStatus = task.status === 'completed' ? 'pending' : 'completed';
      onUpdateTask(taskId, { status: newStatus });
    }
  };

  const handleTaskPress = (task: Task) => {
    setSelectedTask(task);
    setShowModal(false); // Close the tasks modal first
    setShowDetailsModal(true);
  };

  const handleDetailsModalClose = () => {
    setShowDetailsModal(false);
    setSelectedTask(null);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return '#FF3B30';
      case 'medium': return '#FF9500';
      case 'low': return '#34C759';
      default: return '#666666';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
    } else {
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
      });
    }
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  // Mouse/Touch handlers for swipe functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.movementX;
    setDragOffset(prev => prev + deltaX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // If swiped left significantly, go to next task
    if (dragOffset < -40 && currentTasks.length > 1) {
      setCurrentTaskIndex((prevIndex) => (prevIndex + 1) % currentTasks.length);
    }
    // If swiped right significantly, go to previous task
    else if (dragOffset > 40 && currentTasks.length > 1) {
      setCurrentTaskIndex((prevIndex) => (prevIndex - 1 + currentTasks.length) % currentTasks.length);
    }
    
    setDragOffset(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const deltaX = touch.clientX - (e.target as any).getBoundingClientRect().left;
    setDragOffset(deltaX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // If swiped left significantly, go to next task
    if (dragOffset < -40 && currentTasks.length > 1) {
      setCurrentTaskIndex((prevIndex) => (prevIndex + 1) % currentTasks.length);
    }
    // If swiped right significantly, go to previous task
    else if (dragOffset > 40 && currentTasks.length > 1) {
      setCurrentTaskIndex((prevIndex) => (prevIndex - 1 + currentTasks.length) % currentTasks.length);
    }
    
    setDragOffset(0);
  };

  const currentTask = currentTasks[currentTaskIndex] || currentTasks[0];

  return (
    <div className="tasks-card-container">
      <div
        ref={cardRef}
        className="tasks-card"
        style={{
          backgroundColor: theme.colors.surface,
          transform: `translateX(${dragOffset}px)`,
          transition: isDragging ? 'none' : 'transform 0.15s ease-out'
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={() => setShowModal(true)}
      >
        <div className="card-content">
          {/* Current task item */}
          <div className="task-item">
            <button
              className={`checkbox ${currentTask?.status === 'completed' ? 'checkbox-completed' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                currentTask && handleToggleTask(currentTask.id);
              }}
            >
              {currentTask?.status === 'completed' && (
                <span className="checkmark">✓</span>
              )}
            </button>
            <div className="task-content">
              <div
                className={`task-text ${currentTask?.status === 'completed' ? 'task-completed' : ''}`}
                style={{ color: currentTask?.status === 'completed' ? theme.colors.textSecondary : theme.colors.textPrimary }}
              >
                {currentTask?.title || 'No tasks yet'}
              </div>
              {currentTask && (
                <div className="task-meta" style={{ color: theme.colors.textSecondary }}>
                  {formatDate(currentTask.due_date)} • {formatTime(currentTask.due_date)}
                </div>
              )}
            </div>
          </div>

          {/* Status indicator */}
          {currentTasks.length > 1 && (
            <div className="status-text" style={{ color: theme.colors.textSecondary }}>
              {currentTaskIndex + 1} of {currentTasks.length}
            </div>
          )}

          {/* Progress indicators */}
          <div className="progress-container">
            {currentTasks.slice(0, 4).map((task, index) => (
              <div
                key={task.id}
                className={`progress-dot ${index === currentTaskIndex ? 'progress-dot-active' : ''}`}
                style={{ backgroundColor: getPriorityColor(task.priority) }}
              />
            ))}
            {currentTasks.length > 4 && (
              <div className="more-indicator">•••</div>
            )}
          </div>
        </div>
      </div>

      {/* Full Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div 
            className="modal-container"
            style={{ backgroundColor: theme.colors.background }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="modal-header">
              <button 
                className="modal-close-btn"
                onClick={() => setShowModal(false)}
              >
                <X size={24} color={theme.colors.textPrimary} />
              </button>
              <div className="modal-title" style={{ color: theme.colors.textPrimary }}>
                Tasks
              </div>
              <button 
                className="add-button"
                onClick={() => {
                  setShowModal(false); // Close the tasks modal first
                  setShowCreateModal(true);
                }}
              >
                <Plus size={24} color={theme.colors.primary} />
              </button>
            </div>

            {/* Tasks list */}
            <div className="tasks-list">
              {currentTasks.map((task) => (
                <div
                  key={task.id}
                  className="modal-task-item"
                  style={{ backgroundColor: theme.colors.surface }}
                  onClick={() => handleTaskPress(task)}
                >
                  <button
                    className={`modal-checkbox ${task.status === 'completed' ? 'modal-checkbox-completed' : ''}`}
                    style={{ 
                      borderColor: task.status === 'completed' ? getPriorityColor(task.priority) : theme.colors.border,
                      backgroundColor: task.status === 'completed' ? getPriorityColor(task.priority) : 'transparent'
                    }}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent task press when clicking checkbox
                      handleToggleTask(task.id);
                    }}
                  >
                    {task.status === 'completed' && (
                      <span className="modal-checkmark">✓</span>
                    )}
                  </button>
                  <div className="modal-task-content">
                    <div
                      className={`modal-task-text ${task.status === 'completed' ? 'task-completed' : ''}`}
                      style={{ color: task.status === 'completed' ? theme.colors.textSecondary : theme.colors.textPrimary }}
                    >
                      {task.title}
                    </div>
                    <div className="modal-task-meta">
                      <div className="task-meta-item">
                        <Calendar size={12} color={theme.colors.textSecondary} />
                        <span className="task-meta-text" style={{ color: theme.colors.textSecondary }}>
                          {formatDate(task.due_date)}
                        </span>
                      </div>
                      <div className="task-meta-item">
                        <Clock size={12} color={theme.colors.textSecondary} />
                        <span className="task-meta-text" style={{ color: theme.colors.textSecondary }}>
                          {formatTime(task.due_date)}
                        </span>
                      </div>
                      <div 
                        className="priority-badge"
                        style={{ backgroundColor: getPriorityColor(task.priority) + '20' }}
                      >
                        <span 
                          className="priority-text"
                          style={{ color: getPriorityColor(task.priority) }}
                        >
                          {task.priority.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {currentTasks.length === 0 && (
                <div className="empty-state">
                  <div className="empty-text" style={{ color: theme.colors.textSecondary }}>
                    No current tasks
                  </div>
                  <div className="empty-subtext" style={{ color: theme.colors.textSecondary }}>
                    Create a new task to get started
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Placeholder modals - you'll need to implement these */}
      {showCreateModal && (
        <div className="modal-overlay" onClick={() => setShowCreateModal(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <button onClick={() => setShowCreateModal(false)}>Close</button>
              <div>Create Task</div>
            </div>
            <div>Task creation form would go here</div>
          </div>
        </div>
      )}

      {showDetailsModal && selectedTask && (
        <div className="modal-overlay" onClick={handleDetailsModalClose}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <button onClick={handleDetailsModalClose}>Close</button>
              <div>Task Details</div>
            </div>
            <div>Task details for: {selectedTask.title}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TasksCard;
