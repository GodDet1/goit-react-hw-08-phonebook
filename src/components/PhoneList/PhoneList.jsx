import React from 'react';
import { Container, List, ListItem, MyBtn } from './styled';
import { useSelector } from 'react-redux';
import { useDeleteDataMutation, useGetDataQuery } from 'Redux/API/API';
import { Bars } from 'react-loader-spinner';

function PhoneList() {
  const { data, isFetching, isSuccess } = useGetDataQuery();
  const [deleteData] = useDeleteDataMutation();

  const filter = useSelector(
    ({
      noteReducer: {
        contacts: { filter },
      },
    }) => filter
  );

  const filterUsers = () => data.filter(item => item.name.toLowerCase().includes(filter));

  return (
    <Container>
      {isFetching && (
        <Bars
          color="#acacac"
          wrapperStyle={{
            justifyContent: 'center',
          }}
        />
      )}

      {isSuccess && filterUsers().length === 0 && <p> There is no user</p>}

      {isSuccess && (
        <List>
          {filterUsers().map(item => (
            <ListItem key={item.id}>
              <p>
                {item.name}: {item.phone}
              </p>
              <MyBtn type="button" onClick={() => deleteData(item.id)}>
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
