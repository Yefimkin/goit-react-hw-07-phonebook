import ContactList from 'components/ContactList/ContactList';
import Container from './Container/Container';
// import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
// import { useState } from 'react';

// export default function App() {
//   // const [filter, setFilter] = useState('');

//   // const handleChange = e => {
//   //   setFilter(e);
//   // };

//   return (
//     <Container>
//       <div>
//         <div>
//             <h1>Phonebook</h1>
//             <ContactForm />
//             <h2>Contacts</h2>
//             <ContactList />
//         </div>
//     </Container>
//   );
// }

export default function App() {
  return (
    <Container>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <ContactList />
      </div>
    </Container>
  );
}
