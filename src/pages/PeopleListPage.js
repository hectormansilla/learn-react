import React from 'react';
import { PeopleList } from '../PeopleList';

const people = [{
    name: 'john',
    age: 40,
    hairColor: 'brown',
  }, {
    name: 'helga',
    age: 25,
    hairColor: 'red',
  }, {
    name: 'dwayne',
    age: 55,
    hairColor: 'blonde',
  }]

export const PeopleListPage = () => (
    <>
        <h1>The People List Page</h1>
        <PeopleList people={people} />
    </>
)