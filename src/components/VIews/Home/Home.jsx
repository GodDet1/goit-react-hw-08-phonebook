import React from 'react';
import { Container, Header, MyP } from './styled';

function Home() {
  return (
    <div className="container">
      <Container>
        <Header> What is phonebook?</Header>
        <MyP>
          "Telephone book", "Phone book", and "White pages" redirect here. For
          the film, see The Telephone Book. For a contact list, see Contact
          list. For other uses, see White pages (disambiguation). A "white
          pages" telephone directory A telephone directory, commonly called a
          telephone book, telephone address book, phone book, or the white and
          yellow pages, is a listing of telephone subscribers in a geographical
          area or subscribers to services provided by the organization that
          publishes the directory. Its purpose is to allow the telephone number
          of a subscriber identified by name and address to be found. The advent
          of the Internet and smartphones in the 21st century greatly reduced
          the need for a paper phone book. Some communities, such as Seattle and
          San Francisco, sought to ban their unsolicited distribution as
          wasteful, unwanted and harmful to the environment.The slogan "Let Your
          Fingers Do the Walking" refers to use of phone books.
        </MyP>
      </Container>
    </div>
  );
}

export default Home;
