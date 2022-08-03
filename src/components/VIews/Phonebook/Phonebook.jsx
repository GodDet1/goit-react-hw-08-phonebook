import Filter from 'components/Filter/Filter';
import InputForm from 'components/InputForm/InputForm';
import PhoneList from 'components/PhoneList/PhoneList';
import { MyHeader, Container } from 'components/VIews/Phonebook/styled.module';

function Phonebook() {
  return (
    <Container>
      <MyHeader>Phonebook</MyHeader>
      <InputForm />

      <MyHeader>Contacts</MyHeader>
      <Filter />
      <PhoneList />
    </Container>
  );
}

export default Phonebook;
