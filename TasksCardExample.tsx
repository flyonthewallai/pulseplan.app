import React, { useState } from 'react';
import TasksCard from './TasksCardReact';

// Example usage of the TasksCard React component
const App: React.FC = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Complete project proposal',
      status: 'pending' as const,
      priority: 'high' as const,
      due_date: '2024-01-15T14:00:00Z'
    },
    {
      id: '2',
      title: 'Review code changes',
      status: 'pending' as const,
      priority: 'medium' as const,
      due_date: '2024-01-16T10:00:00Z'
    },
    {
      id: '3',
      title: 'Update documentation',
      status: 'completed' as const,
      priority: 'low' as const,
      due_date: '2024-01-14T16:00:00Z'
    }
  ]);

  const handleUpdateTask = (taskId: string, updates: any) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId ? { ...task, ...updates } : task
      )
    );
  };

  // Custom theme (optional)
  const customTheme = {
    colors: {
      surface: '#ffffff',
      background: '#f8f9fa',
      textPrimary: '#212529',
      textSecondary: '#6c757d',
      primary: '#007bff',
      border: '#dee2e6'
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>TasksCard React Component Example</h1>
      
      <TasksCard
        tasks={tasks}
        onUpdateTask={handleUpdateTask}
        theme={customTheme}
      />
      
      <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
        <h3>Features:</h3>
        <ul>
          <li>✅ Swipe left/right to navigate between tasks</li>
          <li>✅ Click checkbox to mark tasks as complete</li>
          <li>✅ Click card to open full task list modal</li>
          <li>✅ Priority color coding (high=red, medium=orange, low=green)</li>
          <li>✅ Responsive design with mobile support</li>
          <li>✅ Dark mode support</li>
          <li>✅ Smooth animations and transitions</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
