import React from 'react';
import AuthorForm from '../../../components/author/AuthorConfirm';
import AuthorLayout from '../../../components/author/AuthorLayout';

const index = () => {
  return (
    <AuthorLayout noPageNum noPageTitle>
      <AuthorForm />
    </AuthorLayout>
  );
};

export default index;
