// Theme utility functions for consistent styling across the application

export const getThemeClasses = (darkMode) => ({
  // Background classes
  cardBg: darkMode ? 'bg-gray-800' : 'bg-white',
  pageBg: darkMode ? 'bg-gray-900' : 'bg-gray-50',
  inputBg: darkMode ? 'bg-gray-700' : 'bg-white',
  modalBg: darkMode ? 'bg-gray-800' : 'bg-white',
  
  // Text classes
  primaryText: darkMode ? 'text-white' : 'text-gray-900',
  secondaryText: darkMode ? 'text-gray-300' : 'text-gray-600',
  mutedText: darkMode ? 'text-gray-400' : 'text-gray-500',
  
  // Border classes
  border: darkMode ? 'border-gray-600' : 'border-gray-200',
  borderLight: darkMode ? 'border-gray-700' : 'border-gray-100',
  
  // Input/Form classes
  input: `${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`,
  select: `${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`,
  
  // Table classes
  tableHeader: darkMode ? 'text-gray-300' : 'text-gray-700',
  tableRow: darkMode ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-100 hover:bg-gray-50',
  
  // Interactive elements
  hoverBg: darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50',
});

export const getCardClasses = (darkMode) => `
  ${darkMode ? 'bg-gray-800' : 'bg-white'} 
  rounded-lg shadow-md p-6
`;

export const getInputClasses = (darkMode) => `
  px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 
  ${darkMode 
    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
  }
`;

export const getButtonClasses = (variant = 'primary', darkMode) => {
  const base = 'px-4 py-2 rounded-lg font-medium transition-colors';
  
  switch (variant) {
    case 'primary':
      return `${base} bg-purple-600 text-white hover:bg-purple-700`;
    case 'secondary':
      return `${base} ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'}`;
    case 'danger':
      return `${base} bg-red-600 text-white hover:bg-red-700`;
    case 'success':
      return `${base} bg-green-600 text-white hover:bg-green-700`;
    default:
      return base;
  }
};
