import cookies from 'js-cookie';
import faker from 'faker';
import React from 'react';

let userName = cookies.get('userName');
if (userName === undefined) {
  userName = faker.name.findName();
  cookies.set('userName', userName);
}

const userContext = React.createContext(userName);

const userData = {
  name: userName,
  userContext,
};

export default userData;
