
// Regular expression for basic email format validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Function to check if an email has a valid format
export const isValidEmailFormat = (email: string): boolean => {
  return emailRegex.test(email);
};

// Function to check if an email belongs to a company (not free email providers)
export const isCompanyEmail = (email: string): boolean => {
  const freeEmailProviders = [
    'gmail.com',
    'yahoo.com',
    'hotmail.com',
    'outlook.com',
    'aol.com',
    'icloud.com',
    'mail.com',
    'protonmail.com',
    'zoho.com',
    'yandex.com',
    'gmx.com',
    'live.com',
    'inbox.com',
  ];
  
  const domain = email.split('@')[1]?.toLowerCase();
  
  // If no domain found or domain is in the list of free providers, it's not a company email
  if (!domain || freeEmailProviders.includes(domain)) {
    return false;
  }
  
  return true;
};

// Comprehensive email validation
export const validateEmail = (email: string): { 
  isValid: boolean; 
  message?: string; 
} => {
  if (!isValidEmailFormat(email)) {
    return { 
      isValid: false, 
      message: "Por favor, ingresa un correo electrónico con formato válido." 
    };
  }
  
  if (!isCompanyEmail(email)) {
    return { 
      isValid: false, 
      message: "Por favor, utiliza un correo electrónico corporativo." 
    };
  }
  
  return { isValid: true };
};
