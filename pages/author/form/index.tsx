import React from 'react';
import AuthorForm from '../../../components/author/AuthorForm';
import AuthorLayout from '../../../components/author/@AuthorLayout';

const index = () => {
  return (
    <AuthorLayout pageNum="3" title="신청서를 작성해주세요">
      <AuthorForm />
    </AuthorLayout>
  );
};

export default index;
