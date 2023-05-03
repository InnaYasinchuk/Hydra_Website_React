
const validateForm = () => {
  const validateFirstName = (value) => {
    if (!value) {
      return "Enter your name";
    } else if (
      value.trim() === "" ||
      !/^[a-zA-Zа-яА-Я]*$/.test(value)  ||
      value.length < 2
    ) {
      return "Enter correct name";
    }
  };

  const validateLastName = (value) => {
    if (!value) {
      return "Enter your Last name";
    } else if (
      value.trim() === "" ||
      !/^[a-zA-Zа-яА-Я]*$/.test(value) ||
      value.length < 2
    ) {
      return "Enter correct Last name";
    }
  };

  const validateEmail = (value) => {
    if (!value) {
      return "Enter your email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return "Enter correct email";
    }
  };
  const validatePhone = (value) => {
    if (!value) {
      return "Enter your phone number";
    } else if (
      !/^\+?\d{1,3}[- ]?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{2}[- ]?\d{2}$/.test(value)
    ) {
      return "Enter correct phone number";
    }
  };

  const validateSubject = (value) => {
    if (!value) {
      return "Enter your subject";
    } else if (value.trim() === "" || value.length < 5) {
      return "Minimum 5 characters";
    }
  };

  const validateAbout = (value) => {
    if (!value) {
      return "Tell Us Something";
    } else if (value.trim() === "" || value.length < 15) {
      return "Minimum 15 characters";
    }
  };
  return {
    validateFirstName,
    validateLastName,
    validateEmail,
    validatePhone,
    validateSubject,
    validateAbout,
  };
};

export default validateForm ;
