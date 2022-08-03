import React from 'react';
import { Container, List, ListItem, MyBtn } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { Bars } from 'react-loader-spinner';
import { useEffect } from 'react';
import phonebookOperations from 'Redux/Reducer/phonebook-operations';

function PhoneList() {
  const data = useSelector(
    ({
      phonebookSlice: {
        contacts: { items },
      },
    }) => items
  );

  const filter = useSelector(
    ({
      phonebookSlice: {
        contacts: { filter },
      },
    }) => filter
  );

  const dispatch = useDispatch();
  const isFetching = useSelector(({ auth: { isLoggedIn } }) => isLoggedIn);

  useEffect(() => {
    dispatch(phonebookOperations.fetchUserPhonebook());
  }, [dispatch]);

  const filterUsers = () =>
    data.filter(item => item.name.toLowerCase().includes(filter));

  const handleDeleteUser = id => {
    dispatch(phonebookOperations.deleteUserNotes(id));
  };

  return (
    <Container>
      {!isFetching && (
        <Bars
          color="#acacac"
          wrapperStyle={{
            justifyContent: 'center',
          }}
        />
      )}

      {isFetching && filterUsers().length === 0 && <p> There is no user</p>}

      {isFetching && (
        <List>
          {filterUsers().map(item => (
            <ListItem key={item.id}>
              <p>
                {item.name}: {item.number}
              </p>
              <MyBtn type="button" onClick={() => handleDeleteUser(item.id)}>
                x
              </MyBtn>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
}

export default PhoneList;
