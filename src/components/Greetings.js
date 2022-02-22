import React from 'react';

const Greetings = ({ lang, children }) => {
  if (lang === 'fr') return <h1>Bonjour {children}</h1>;
  else if (lang === 'en') return <h1>Hello {children}</h1>;
  else if (lang === 'de') return <h1>Hallo {children}</h1>;
  else if (lang === 'es') return <h1>Hola {children}</h1>;
};

export default Greetings;
